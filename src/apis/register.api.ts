import axios from "axios";
import { BASE_URL, LS_AUTH_TOKEN } from "../constants/constants";
import { RegisterRequest, RegisterResponse } from "../Models/RegisterUser";

export const signup = async (data: RegisterRequest) => {
  try {
    const response = await axios.post<RegisterResponse>(
      `${BASE_URL}/signup`,
      data
    );
    localStorage.setItem(LS_AUTH_TOKEN, response.data.token);
    return response.data.user;
  } catch (error) {
    console.error("Not able signup");
  }
};
