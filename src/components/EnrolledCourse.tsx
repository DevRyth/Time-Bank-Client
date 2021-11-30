import React from "react";
import Button from "../sharedComponents/button/Button";
import { CgClose, ImSpinner9 } from "react-icons/all";
import { CourseData } from "../Models/Course";
import { store, useAppSelector } from "../Store/store";
import { courseEnroll } from "../actions/enroll.action";
import {
  enrollCourseErrorSelector,
  enrollCourseLoadingSelector,
} from "../selectors/enroll.selector";

interface Props {
  setIsOpen?: () => void;
  data: CourseData;
}

export const EnrolledCourse: React.FC<Props> = ({ setIsOpen, data }) => {
  const isLoading = useAppSelector(enrollCourseLoadingSelector);
  const errorMessage = useAppSelector(enrollCourseErrorSelector);
  return (
    <div className=" flex flex-col font-extrabold p-4 space-y-6">
      <div className="mx-auto cursor-pointer">
        <CgClose className="h-6 w-6 text-white" onClick={setIsOpen} />
      </div>
      {data?.schedule?.map((item, index) => (
        <div
          key={index}
          className="flex justify-between p-3 space-x-2 items-center shadow-stacked rounded-lg bg-white"
        >
          <div className="flex space-x-1">
            <div className="mr-3">{item?.appointment?.day}</div>

            <div>|</div>

            <div className="pl-3">{item?.appointment.start}</div>
          </div>
          <Button
            title="Enroll"
            onClick={() => {
              if (
                window.confirm(
                  `Do you really want to enroll?\nDay: ${item.appointment.day}  Time: ${item.appointment.start}  Duration: ${item.appointment.duration}min`
                )
              ) {
                store.dispatch(
                  courseEnroll({
                    appointment_id: item.appointment.appointment_id,
                    course_id: data.course_id,
                  })
                );
              }
            }}
            theme="primary"
          />
        </div>
      ))}
      {errorMessage && (
        <div className="text-center text-lg font-bold text-red-200">
          Cannot enroll your own class
        </div>
      )}
      {isLoading && (
        <ImSpinner9 className="h-6 w-6 animate-spin mx-auto text-white" />
      )}
    </div>
  );
};

export default React.memo(EnrolledCourse);
