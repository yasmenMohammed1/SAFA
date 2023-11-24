export interface CompanyVerification {
  company_name: string;
  company_business_email: string;
  company_address: string;
  company_phone: string;
  company_city_id: {
    code: string;
    label: string;
    phone: string;
  };
  company_country_id: {
    code: string;
    label: string;
    phone: string;
  };

  lang: {
    code: string;
    label: string;
  };
}
