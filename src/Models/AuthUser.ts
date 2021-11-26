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
  _id: string;
  email: string;
  username: string;
  password: string;
  time_bank: TimeBank;
  courses: any[];
  user_id: number;
  __v: number;
  user_info: UserInfo;
}

export interface TimeBank {
  _id: string;
  time: number;
  usedTime: number;
  earnedTime: number;
  timebank_id: number;
  __v: number;
}

export interface UserInfo {
  _id: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  gender: string;
  birth_date: number;
  birth_month: number;
  birth_year: number;
  address: string;
  district: string;
  state: string;
  pincode: number;
  phone_number: string;
  userinfo_id: number;
  __v: number;
}

// export interface UserData {
//   user_id: string;
//   email: string;
//   username: string;
//   userInfo: {
//     first_name: string;
//     middle_name?: string;
//     last_name: string;
//     gender: "male" | "female" | "Female" | "Male";
//     birth_date: string;
//     birth_month: string;
//     birth_year: string;
//     address: string;
//     district: string;
//     state: string;
//     pincode: string;
//     phone_number: string;
//   };
