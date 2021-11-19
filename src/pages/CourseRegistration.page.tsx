import React from "react";
import Appointment from "../components/Appointment.component";
import CourseRegister from "./CourseRegister.page";

const CourseRegistration: React.FC = () => {
  return (
    <div className="h-full p-4 bg-primary-lite font-extrabold lg:text-3xl flex flex-col space-y-4">
      <span>Register for course</span>
      <CourseRegister></CourseRegister>
      <Appointment></Appointment>
    </div>
  );
};

export default React.memo(CourseRegistration);
