import axios from "axios";
import { axiosRequest, axiosResponse } from "../axios/axios";
import { BASE_URL, LS_AUTH_TOKEN } from "../constants/constants";
import { LoginRequest, LoginResponse } from "../Models/AuthUser";

axiosRequest();
axiosResponse();

export const login = async (data: LoginRequest) => {
  try {
    const response = await axios.post<LoginResponse>(`${BASE_URL}/login`, data);
    console.log(response);
    localStorage.setItem(LS_AUTH_TOKEN, response.data.token);
    return response.data.user;
  } catch (error) {
    console.error("Not able to check credentials!");
  }
};

export const logout = () => {
  localStorage.removeItem(LS_AUTH_TOKEN);
  window.location.href = "/login";
};
