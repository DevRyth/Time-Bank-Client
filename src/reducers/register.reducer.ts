import { Reducer } from "redux";
import {
  REGISTER_USER_ERROR,
  REGISTER_USER_INFO,
  REGISTER_USER_LOADING,
  REGISTER_USER_SEND_DATA,
} from "../actions/actions.constants";

export interface RegisterState {
  loading: boolean;
  errorMessage: string;
}

const initialState: RegisterState = {
  loading: false,
  errorMessage: "",
};

export const registerReducer: Reducer<RegisterState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case REGISTER_USER_SEND_DATA: {
      return { ...state, loading: true };
    }

    case REGISTER_USER_INFO: {
      return { ...state, loading: true };
    }

    case REGISTER_USER_ERROR: {
      return { ...state, errorMessage: action.payload };
    }

    case REGISTER_USER_LOADING: {
      return { ...state, loading: action.payload };
    }
    default:
      return state;
  }
};
