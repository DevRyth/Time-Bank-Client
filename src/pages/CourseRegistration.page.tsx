import React from "react";
import Appointment from "../components/Appointment.component";
import CourseRegister from "./CourseRegister.page";

const CourseRegistration: React.FC = () => {

  const initialValues = {
    title: "",
    difficulty: "",
    summary: "",
    schedule: [{
      day: "",
      duration: {
        start: "",
        duration: ""
      }
    }]
  }

  return (
    <div className="h-full p-4 font-extrabold lg:text-2xl flex flex-col space-y-4">
      <span>Register for course</span>
      <CourseRegister />
      <Appointment />
    </div>
  );
};

export default React.memo(CourseRegistration);
