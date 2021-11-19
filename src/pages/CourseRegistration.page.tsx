import React from "react";
import Appointment from "../components/Appointment.component";
import CourseRegister from "./CourseRegister.page";

const CourseRegistration: React.FC = () => {
  return (
    <div>
      <CourseRegister />
      <Appointment />
    </div>
  );
};

export default React.memo(CourseRegistration);
