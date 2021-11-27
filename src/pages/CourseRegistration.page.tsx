import { Formik } from "formik";
import React, { useState } from "react";
import Appointment from "../components/Appointment.component";
import Button from "../sharedComponents/button/Button";
import CourseRegister from "../components/CourseInfo";
import * as Yup from "yup";
import { store, useAppSelector } from "../Store/store";
import { courseRegisterSendData } from "../actions/course.action";
import {
  courseErrorMessageSelector,
  courseLoadingSelector,
} from "../selectors/course.selector";
import Alert from "../sharedComponents/Alert/Alert";

const CourseRegistration: React.FC = () => {
  const isLoading = useAppSelector(courseLoadingSelector);
  const errorMessage = useAppSelector(courseErrorMessageSelector);

  const [schedule, setSchedule] = useState([
    {
      appointment: {
        mm: "",
        hh: "",
        duration: "",
        day: "",
      },
    },
  ]);
  const initialValues = {
    title: "",
    description: "",
    difficulty: "",
    summary: "",
    schedule: schedule,
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(6, ({ min }) => `Cannot be less than ${min}`)
      .required("Title is required field"),
    summary: Yup.string()
      .min(20, ({ min }) => `Cannot be less than ${min}`)
      .required("Summary is required field!"),
    description: Yup.string()
      .min(30, ({ min }) => `Cannot be less than ${min}`)
      .required("Description is required field"),
    difficulty: Yup.string().required("Difficulty is required field"),
    schedule: Yup.array().of(
      Yup.object().shape({
        appointment: Yup.object().shape({
          mm: Yup.string().required("Minute is required field"),
          hh: Yup.string().required("Hour is required field"),
          duration: Yup.string().required("Duration is required field"),
          day: Yup.string().required("Day is required field"),
        }),
      })
    ),
  });

  return (
    <div className="min-h-full p-3 font-extrabold lg:text-2xl relative">
      <h1 className="text-center text-2xl md:text-4xl text-primary-dark">
        Register For Course
      </h1>
      {errorMessage && (
        <Alert
          className="rounded-3xl absolute inset-x-0 mx-auto max-w-max mt-4 text-xs pt-2 pb-2 pl-4 pr-4 md:text-base md:px-6 md:py-2"
          containsIcon={false}
        >
          {errorMessage}
        </Alert>
      )}
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={async (values, helper) => {
          let newSchedule: any[] = [];

          values.schedule.forEach((item) => {
            newSchedule.push({
              appointment: {
                start: item.appointment.hh + ":" + item.appointment.mm,
                duration: item.appointment.duration,
                day: item.appointment.day,
              },
            });
          });

          const mappedValues = {
            title: values.title,
            description: values.description,
            difficulty: values.difficulty,
            summary: values.summary,
            schedule: newSchedule,
          };

          // const url = BASE_URL + "/course-register";
          // try {
          //   await axios.post(url, mappedValues);
          // } catch (error) {
          //   console.log(error);
          // } finally {
          //   helper.setSubmitting(false);
          // }
          store.dispatch(courseRegisterSendData(mappedValues));
        }}
      >
        {({
          values,
          touched,
          errors,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <CourseRegister
              formikValues={{
                values: values.schedule[0].appointment.duration,
                touched: touched,
                errors: errors,
                handleChange: handleChange,
              }}
            />
            <Appointment
              setSchedule={setSchedule}
              schedule={schedule}
              formikValues={{
                values: values,
                touched: touched,
                errors: errors,
                handleChange: handleChange,
              }}
            />
            <Button
              isSubmitting={isLoading}
              type="submit"
              title="Submit"
              className={`m-auto`}
              theme="primary"
            ></Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default React.memo(CourseRegistration);
