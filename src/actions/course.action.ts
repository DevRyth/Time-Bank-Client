import { CourseData, CourseResponse } from "../Models/Course";
import {
  COURSE_ALL,
  COURSE_ALL_DATA,
  COURSE_DATA,
  COURSE_ID,
  COURSE_ID_DATA,
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

export const courseIdData = (course: CourseData) => ({
  type: COURSE_ID_DATA,
  payload: course,
});

export const courseId = (id: number) => ({
  type: COURSE_ID,
  payload: id,
});

export const courseAll = (offset: number, limit: number) => ({
  type: COURSE_ALL,
  payload: { offset, limit },
});

export const courseAllData = (course: CourseData[]) => ({
  type: COURSE_ALL_DATA,
  payload: course,
});
