export interface TellUsMore {
  user_full_name: string;
  company_business_email: string;
  user_phone: string;
  user_password: string;
  user_password_confirmation: string;
  company_country_id: {
    code: string;
    label: string;
    phone: string;
  };
}
