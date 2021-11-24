import axios from "axios";
import { axiosRequest, axiosResponse } from "../axios/axios";
import { BASE_URL, LS_AUTH_TOKEN } from "../constants/constants";
import { RegisterRequest, RegisterResponse } from "../Models/RegisterUser";

axiosRequest();
axiosResponse();

export const signup = async (data: RegisterRequest) => {
  try {
    const response = await axios.post<RegisterResponse>(
      `${BASE_URL}/signup`,
      data
    );
    localStorage.setItem(LS_AUTH_TOKEN, response.data.token);
    return response.data;
  } catch (error) {
    console.error("Not able signup");
  }
};

export const register = async (data: RegisterRequest) => {
  try {
    const response = await axios.post<RegisterResponse>(
      `${BASE_URL}/register`,
      data
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Not able register");
  }
};
