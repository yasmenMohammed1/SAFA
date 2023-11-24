export interface CompanyVerification {
  company_name: string;
  business_email: string;
  phone_number: string;
  city: {
    code: string;
    label: string;
    phone: string;
  };
  country: {
    code: string;
    label: string;
    phone: string;
  };
}
