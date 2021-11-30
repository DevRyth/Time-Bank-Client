import { EnrollCourseRequest, EnrollCourseResponse } from "../Models/Course";
import {
  COURSE_ENROLL,
  COURSE_ENROLL_ERROR,
  COURSE_ENROLL_LOADING,
  COURSE_ENROLL_SEND_DATA,
} from "./actions.constants";

export const courseEnroll = (enrollData: EnrollCourseRequest) => ({
  type: COURSE_ENROLL,
  payload: enrollData,
});
export const courseEnrollLoading = (status: boolean) => ({
  type: COURSE_ENROLL_LOADING,
  payload: status,
});
export const courseEnrollError = (message: string) => ({
  type: COURSE_ENROLL_ERROR,
  payload: message,
});

export const courseEnrollSendData = (enrollData: EnrollCourseResponse) => ({
  type: COURSE_ENROLL_SEND_DATA,
  payload: enrollData,
});
