import axios from "axios";
import { Formik } from "formik";
import React from "react";
import Appointment from "../components/Appointment.component";
import { BASE_URL } from "../constants/constants";
import Button from "../sharedComponents/button/Button";
import CourseRegister from "./CourseRegister.page";

const CourseRegistration: React.FC = () => {

  const initialValues = {
    title: "",
    difficulty: "",
    summary: "",
    schedule: [{
      duration: {
        start: "",
        duration: "",
        day: "",
      }
    }]
  }

  return (
    <div className="h-full p-4 font-extrabold lg:text-2xl">
      <span>Register for course</span>
      <Formik
      initialValues={initialValues}
      onSubmit={async (values, helper) => {
        helper.setSubmitting(true);
        const mappedValues = {
          title: "Guitar",
          difficulty: "Easy",
          summary: "Learn guitar in easiest possible way",
          schedule: [{
            duration: {
              day: "Wednesday",
              duartion: "40",
              start: "03:00"
            }
          }]
        };
        const url = BASE_URL + "/login";
        try {
          const response: any = await axios.post(url, mappedValues);
          helper.setSubmitting(false);
        } catch(error) {
          console.log(error);
        }
      }}>
        {({touched, errors, handleChange, handleSubmit, isSubmitting}) => (
      <form onSubmit={handleSubmit} className=" flex flex-col space-y-4">
      <CourseRegister />
      <Appointment />
      <Button title="Submit" className="m-auto" theme="primary"></Button>
      </form>
      )}
      </Formik>
    </div>
  );
};

export default React.memo(CourseRegistration);
