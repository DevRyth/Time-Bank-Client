export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface RegisterFormRequest {
  user: RegisterFormFields;
}

export interface RegisterFormFields {
  first_name: string;
  middle_name?: string;
  last_name: string;
  gender: string;
  birth_date: string;
  birth_month: string;
  birth_year: string;
  address: string;
  district: string;
  state: string;
  pincode: string;
  phone_number: string;
}
export interface RegisterResponse {
  token: string;
  user_id: string;
  email: string;
  username: string;
}
