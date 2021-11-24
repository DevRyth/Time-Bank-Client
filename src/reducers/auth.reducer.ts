import { Reducer } from "redux";
import {
  ME_FETCH,
  ME_LOADING,
  ME_LOADING_ERROR,
  ME_SENDING_DATA,
} from "../actions/actions.constants";

export interface AuthState {
  id?: number;
  loading?: boolean;
  errorMessage?: string;
}

const initialValues: AuthState = {
  loading: false,
  errorMessage: "",
};

export const authReducer: Reducer<AuthState> = (
  state = initialValues,
  action
) => {
  switch (action.type) {
    case ME_FETCH: {
      const userId: number = action.payload.id;
      return { ...state, id: userId, loading: false };
    }
    case ME_SENDING_DATA: {
      return { ...state, loading: true };
    }
    case ME_LOADING: {
      const status = action.payload;
      return { ...state, loading: status };
    }
    case ME_LOADING_ERROR: {
      const message: string = action.payload;
      return { ...state, errorMessage: message };
    }
    default:
      return state;
  }
};
