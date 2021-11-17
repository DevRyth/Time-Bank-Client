import {
  ME_FETCH,
  ME_LOADING,
  ME_LOADING_ERROR,
  ME_SENDING_DATA,
} from "./actions.constants";

export const meFetchAction = (user: any) => ({
  type: ME_FETCH,
  payload: user,
});

export const meSendingData = (data: any) => ({
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
