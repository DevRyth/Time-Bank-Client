import { Reducer } from "redux";
import {
  COURSE_DATA,
  COURSE_REGISTER_ERROR,
  COURSE_REGISTER_LOADING,
  COURSE_REGISTER_SEND_DATA,
} from "../actions/actions.constants";

export interface CourseRegisterState {
  loading: boolean;
  errorMessage: string;
}

const initialValues: CourseRegisterState = {
  loading: false,
  errorMessage: "",
};

export const courseReducer: Reducer<CourseRegisterState> = (
  state = initialValues,
  action
) => {
  switch (action.type) {
    case COURSE_REGISTER_LOADING: {
      return { ...state, loading: action.payload };
    }

    case COURSE_REGISTER_ERROR: {
      return { ...state, errorMessage: action.payload };
    }
    case COURSE_DATA: {
      return { ...state, loading: false };
    }
    case COURSE_REGISTER_SEND_DATA: {
      return { ...state, loading: true };
    }
    default:
      return { ...state };
  }
};
