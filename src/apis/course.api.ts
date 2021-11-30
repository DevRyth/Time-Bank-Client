import axios from "axios";
import { BASE_URL } from "../constants/constants";
import {
  CourseData,
  CourseRegisterRequest,
  CourseResponse,
} from "../Models/Course";

export const course = async (data: CourseRegisterRequest) => {
  try {
    const response = await axios.post<CourseResponse>(
      `${BASE_URL}/course-register`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Not able to send data");
  }
};

export const courseDetails = async (course_id: number) => {
  try {
    const response = await axios.get<CourseData>(`${BASE_URL}/course`, {
      params: { course_id: course_id },
    });
    return response.data;
  } catch (error) {
    console.error("Not able to send data");
  }
};

export const allCourses = async (data: { offset: number; limit: number }) => {
  try {
    const response = await axios.get<CourseData[]>(`${BASE_URL}/all-courses`, {
      params: { offset: data.offset, limit: data.limit },
    });
    return response.data;
  } catch (error) {
    console.error("Not able to send data");
  }
};

export const enroll = async (data: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/enroll-course`, data);
    return response.data;
  } catch (error) {
    console.error("Not able to send data");
  }
};
