import axios from "axios";
import { BASE_URL } from "../constants/constants";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: any;
  data: any;
}

const login = async (data: LoginRequest) => {
  try {
    const response = await axios.post<LoginResponse>(`${BASE_URL}/login`, data);
    console.log(response);
  } catch (error) {}
};
