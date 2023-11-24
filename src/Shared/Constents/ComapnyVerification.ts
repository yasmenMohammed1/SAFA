import * as yup from "yup";
export const CompanyVerificationSchema = yup.object().shape({
  company_name: yup.string().required("Company Name Is Required"),
  business_email: yup.string().email().required("Business Email Is Required"),
  phone_number: yup.string().required("Phone Number Is Required"),

  country: yup.object({
    code: yup.string().required("Country Is Required"),
    label: yup.string().required("Country Is Required"),
    phone: yup.string().required("Country Is Required"),
  }),
  city: yup.object({
    code: yup.string().required("Country Is Required"),
    label: yup.string().required("Country Is Required"),
    phone: yup.string().required("Country Is Required"),
  }),
});
