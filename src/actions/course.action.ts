import { CourseResponse } from "../Models/Course";
import {
  COURSE_DATA,
  COURSE_REGISTER_ERROR,
  COURSE_REGISTER_LOADING,
  COURSE_REGISTER_SEND_DATA,
} from "./actions.constants";

export const courseRegisterSendData = (data: any) => ({
  type: COURSE_REGISTER_SEND_DATA,
  payload: data,
});

export const courseRegisterLoading = (status: boolean) => ({
  type: COURSE_REGISTER_LOADING,
  payload: status,
});

export const courseRegisterError = (message: string) => ({
  type: COURSE_REGISTER_ERROR,
  payload: message,
});

export const courseData = (course: CourseResponse) => ({
  type: COURSE_DATA,
  payload: course,
});
