import { Reducer } from "redux";
import {
  COURSE_ALL,
  COURSE_ALL_DATA,
  COURSE_DATA,
  COURSE_ID,
  COURSE_ID_DATA,
  COURSE_REGISTER_ERROR,
  COURSE_REGISTER_LOADING,
  COURSE_REGISTER_SEND_DATA,
} from "../actions/actions.constants";
import { CourseData } from "../Models/Course";

export interface CourseRegisterState {
  loading: boolean;
  errorMessage: string;
  byId: { [id: number]: CourseData };
}

const initialValues: CourseRegisterState = {
  loading: false,
  errorMessage: "",
  byId: {},
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
    case COURSE_ID_DATA: {
      const course = action.payload as CourseData;
      return {
        ...state,
        loading: false,
        byId: { ...state.byId, [course.course_id]: course },
      };
    }
    case COURSE_ID: {
      return { ...state, loading: true };
    }

    case COURSE_ALL: {
      return { ...state, loading: true };
    }

    case COURSE_ALL_DATA: {
      const course = action.payload as CourseData[];
      course.forEach((item) => {
        return { ...state.byId, [item.course_id]: item };
      });
      return { ...state, loading: false, byId: course };
    }

    default:
      return { ...state };
  }
};
