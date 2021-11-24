import { RegisterFormFields, RegisterRequest } from "../Models/RegisterUser";
import {
  REGISTER_USER_ERROR,
  REGISTER_USER_INFO,
  REGISTER_USER_LOADING,
  REGISTER_USER_SEND_DATA,
} from "./actions.constants";

export const registerLoading = (status: boolean) => ({
  type: REGISTER_USER_LOADING,
  payload: status,
});

export const registerError = (message: string) => ({
  type: REGISTER_USER_ERROR,
  payload: message,
});

export const registerUserWithInfo = (data: { user: RegisterFormFields }) => ({
  type: REGISTER_USER_INFO,
  payload: data,
});

export const registerSendData = (data: RegisterRequest) => ({
  type: REGISTER_USER_SEND_DATA,
  payload: data,
});
