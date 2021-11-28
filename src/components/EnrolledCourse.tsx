import React from "react";
import Button from "../sharedComponents/button/Button";
import { CgClose } from "react-icons/all";
import { Schedule } from "../Models/Course";

interface Props {
  setIsOpen?: () => void;
  data: Schedule[];
}

export const EnrolledCourse: React.FC<Props> = ({ setIsOpen, data }) => {
  return (
    <div className=" flex flex-col font-extrabold p-4 space-y-6">
      <div className="mx-auto cursor-pointer">
        <CgClose className="h-6 w-6 text-white" onClick={setIsOpen} />
      </div>
      {data?.map((item, index) => (
        <div
          key={index}
          className="flex justify-between p-3 space-x-2 items-center shadow-stacked rounded-lg bg-white"
        >
          <div className="flex space-x-1">
            <div className="mr-3">{item?.appointment?.day}</div>

            <div>|</div>

            <div className="pl-3">{item?.appointment.start}</div>
          </div>
          <Button title="Enroll" onClick={() => null} theme="primary"></Button>
        </div>
      ))}
    </div>
  );
};

export default React.memo(EnrolledCourse);
