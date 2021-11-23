export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: UserData;
  data: any;
}

export interface UserData {
  user_id: string;
  email: string;
  username: string;
  userInfo: {
    first_name: string;
    middle_name: string;
    last_name: string;
    gender: "male" | "female" | "Female" | "Male";
    birth_date: string;
    birth_month: string;
    birth_year: string;
    address: string;
    district: string;
    state: string;
    pincode: string;
    phone_number: string;
  };
}
