import * as yup from "yup";
export const tellUsMoreSchema = yup.object().shape({
  full_name: yup.string().required("Full Nme Is Required"),
  business_email: yup.string().email().required("Business Email Is Required"),
  phone_number: yup.string().required("Phone Number Is Required"),
  password: yup
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
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});
