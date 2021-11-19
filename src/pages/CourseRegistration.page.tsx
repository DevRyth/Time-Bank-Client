import React from "react";
import Appointment from "../components/Appointment.component";
import CourseRegister from "./CourseRegister.page";

const CourseRegistration: React.FC = () => {
  return (
    <div className="flex">
      <CourseRegister />
      {/* <Appointment /> */}
    </div>
  );
};

export default React.memo(CourseRegistration);
