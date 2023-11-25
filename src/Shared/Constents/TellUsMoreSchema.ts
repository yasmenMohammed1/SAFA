import * as yup from "yup";
export const tellUsMoreSchema = yup.object().shape({
  user_full_name: yup.string().required("Full Nme Is Required"),
  company_business_email: yup
    .string()
    .email("Enter A valid Email")
    .required("Business Email Is Required"),
  user_phone: yup.string().required("Phone Number Is Required"),
  company_country_id: yup
    .object({
      code: yup.string().required("Country Is Required"),
      label: yup.string().required("Country Is Required"),
      phone: yup.string().required("Country Is Required"),
    })
    .typeError("Enter a valid Country"),
  user_password: yup
    .string()
    .min(8, { length: "Password too short" })
    .matches(/\d+/, { message: { number: "Password no number" } })
    .matches(/[a-z]+/, { message: { lowercase: "Password no lowercase" } })
    .matches(/[A-Z]+/, { message: { uppercase: "Password no uppercase" } })
    .matches(/[!@#$%^&*()-+]+/, {
      message: { special: "Password no special char" },
    })
    .test(
      "Password has spaces",
      { spaces: "Password has spaces" },
      (value: any) => !/\s+/.test(value)
    )
    .required({ required: "password is required" }),
  user_password_confirmation: yup
    .string()
    .oneOf([yup.ref("user_password")], "Passwords must match")
    .required("Confirm Password is required"),
});
