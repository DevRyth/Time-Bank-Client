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
  creator: string;
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
