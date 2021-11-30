import { Reducer } from "@redux-saga/core/node_modules/redux";
import {
  COURSE_ENROLL,
  COURSE_ENROLL_ERROR,
  COURSE_ENROLL_LOADING,
  COURSE_ENROLL_SEND_DATA,
} from "../actions/actions.constants";
import { EnrollCourseResponse } from "../Models/Course";

export interface CourseEnrollState {
  loading: boolean;
  errorMessage: string;
  id: { appointment_id: number; course_id: number }[];
}

const initialValue: CourseEnrollState = {
  loading: false,
  errorMessage: "",
  id: [],
};

export const courseEnrollReducer: Reducer<CourseEnrollState> = (
  state = initialValue,
  action
) => {
  switch (action.type) {
    case COURSE_ENROLL: {
      return { ...state, loading: true };
    }
    case COURSE_ENROLL_LOADING: {
      return { ...state, loading: action.payload };
    }
    case COURSE_ENROLL_ERROR: {
      return { ...state, errorMessage: action.payload };
    }
    case COURSE_ENROLL_SEND_DATA: {
      const data = action.payload as EnrollCourseResponse;
      return {
        ...state,
        id: [
          ...state.id,
          { appointment_id: data.appointment_id, course_id: data.course_id },
        ],
        loading: false,
      };
    }
    default: {
      return { ...state };
    }
  }
};
