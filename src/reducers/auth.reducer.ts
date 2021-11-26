import { Reducer } from "redux";
import {
  ME_FETCH,
  ME_FETCH_USER,
  ME_LOADING,
  ME_LOADING_ERROR,
  ME_SENDING_DATA,
} from "../actions/actions.constants";
import { UserData } from "../Models/AuthUser";

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
    case ME_FETCH_USER:
    case ME_FETCH: {
      const user: UserData = action.payload;
      return { ...state, id: user?.user_id, loading: false };
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
