import { LoginRequest, LoginResponse } from "../Models/AuthUser";
import {
  ME_FETCH,
  ME_FETCH_USER,
  ME_LOADING,
  ME_LOADING_ERROR,
  ME_SENDING_DATA,
} from "./actions.constants";

export const meFetchUserAction = () => ({
  type: ME_FETCH_USER,
});

export const meFetchAction = (user: LoginResponse) => ({
  type: ME_FETCH,
  payload: user,
});

export const meSendingData = (data: LoginRequest) => ({
  type: ME_SENDING_DATA,
  payload: data,
});

export const meIsLoading = (status: boolean) => ({
  type: ME_LOADING,
  payload: status,
});

export const meLoadingError = (message: string) => ({
  type: ME_LOADING_ERROR,
  payload: message,
});
