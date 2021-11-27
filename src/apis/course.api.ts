import axios from "axios";
import { BASE_URL } from "../constants/constants";
import { CourseRegisterRequest, CourseResponse } from "../Models/Course";

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
