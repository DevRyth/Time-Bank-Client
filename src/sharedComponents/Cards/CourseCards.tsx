import React from "react";
import CourseDefaultImage from "../../Images/coursedefault.jpg";
import { MdFavoriteBorder, BiTimeFive } from "react-icons/all";

const CourseCards: React.FC = () => {
  const fields = [
    {
      teacherName: "Shivam Yadav",
      title: "Course 1",
      duration: "00:40:00",
    },
  ];
  return (
    <div className="mx-auto md:mx-0">
      <div className="w-72 h-80 mx-auto">
        <div className="bg-gray-300 h-1/2">
          <img
            src={CourseDefaultImage}
            className="h-full w-full rounded-tl-lg shadow-primary object-cover object-center"
            alt="courseImage"
          />
        </div>
        <div className="rounded-br-lg px-6 pt-3 bg-white h-1/2">
          <div className="">{fields[0].teacherName}</div>
          <div className="font-extrabold mt-2 text-lg">{fields[0].title}</div>
          <div className="flex justify-between">
            <div className="flex">
              <MdFavoriteBorder className="text-primary-dark h-10 my-auto" />
            </div>
            <div className="flex pr-5">
              <BiTimeFive className="my-auto mr-3 text-primary-dark h-10" />
              <span className="my-auto">{fields[0].duration}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CourseCards);
