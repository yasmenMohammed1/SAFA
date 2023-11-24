import * as yup from "yup";
export const CompanyVerificationSchema = yup.object().shape({
  company_name: yup.string().required("Company Name Is Required"),
  company_business_email: yup
    .string()
    .email()
    .required("Business Email Is Required"),
  company_phone: yup.string().required("Phone Number Is Required"),
  company_address: yup.string().required("Address Is Required"),
  company_country_id: yup.object({
    code: yup.string(),
    label: yup.string(),
    phone: yup.string(),
  }),
  company_city_id: yup.object({
    code: yup.string(),
    label: yup.string(),
    phone: yup.string(),
  }),

  lang: yup
    .object({
      code: yup.string().required(),
      label: yup.string().required(),
    })
    .required("Language Is Required"),
});
