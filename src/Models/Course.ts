export interface CourseRegisterRequest {
  title: string;
  summary: string;
  description: string;
  schedule: {
    appointment: {
      start: string;
      duration: string;
      day: string;
    };
  }[];
}

export interface CourseResponse {
  courses: CourseData[];
  creator_id: number;
}

export interface CourseData {
  _id: string;
  title: string;
  summary: string;
  description: string;
  difficulty: string;
  creator: Creator;
  schedule: Schedule[];
  course_id: number;
  __v: number;
}

export interface Schedule {
  appointment: Appointment;
  _id: string;
}

export interface Appointment {
  _id: string;
  start: string;
  duration: string;
  day: string;
  appointment_id: number;
  __v: number;
}

export interface Creator {
  _id: string;
  email: string;
  username: string;
  password: string;
  time_bank: string;
  courses: string[];
  user_id: number;
  __v: number;
  user_info: UserInfo;
}

export interface UserInfo {
  _id: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  gender: string;
  birth_date: number;
  birth_month: number;
  birth_year: number;
  address: string;
  district: string;
  state: string;
  pincode: number;
  phone_number: string;
  userinfo_id: number;
  __v: number;
}

export interface Schedule {
  appointment: Appointment;
  _id: string;
}

export interface EnrollCourseRequest {
  appointment_id: number;
  course_id: number;
}

export interface EnrollCourseResponse {
  course_id: number;
  appointment_id: number;
}

export interface EnrollCourseData {
  _id: string;
  title: string;
  summary: string;
  description: string;
  difficulty: string;
  creator: string;
  schedule: Schedule[];
  course_id: number;
  __v: number;
}

export interface Schedule {
  appointment: Appointment;
  availablity: boolean;
  isEnrolled: boolean;
  _id: string;
}

export interface Appointment {
  _id: string;
  start: string;
  duration: string;
  day: string;
  appointment_id: number;
  __v: number;
}
