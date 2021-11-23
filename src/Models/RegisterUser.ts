export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  token: string;
  user: UserData;
}

export interface UserData {
  user_id: string;
  email: string;
  username: string;
}
