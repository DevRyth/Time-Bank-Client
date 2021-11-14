import React, { useState } from "react";
import CourseImage from "../Images/coursedefault.jpg";
import Button from "../sharedComponents/button/Button";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/all";

const CourseDetail: React.FC = () => {
  const [isAboutSliced, setIsAboutSliced] = useState(true);
  const field = {
    image: CourseImage,
    "teacher-name": "Shivam Yadav",
    title: "UX Design from concept to wireframe",
    "short-description":
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quaerat.",
    comments: 2,
    duration: "00:30:00",
    about:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis placeat vero velit ratione iusto debitis a voluptates fuga similique architecto, obcaecati esse deleniti provident nemo impedit, veniam dolor ut? Voluptates! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis placeat vero velit ratione iusto debitis a voluptates fuga similique architecto, obcaecati esse deleniti provident nemo impedit, veniam dolor ut? Voluptates!",
  };

  const slicedAbout = isAboutSliced
    ? field.about.substring(0, 200)
    : field.about;

  const handleSliceClicked = () => {
    setIsAboutSliced(!slicedAbout);
  };

  return (
    <div>
      <div className="md:grid md:grid-cols-4 md:px-16 lg:px-24">
        <div className="md:col-span-1 h-52 mt-6">
          <img
            src={field.image}
            alt="courseimage"
            className="w-44 rounded-xl border-1 border-primary-dark shadow-stacked mx-auto object-cover h-full object-center"
          />
        </div>
        <div className="md:col-span-2 md:my-auto text-center md:text-left">
          <div className="h-full mt-10 mx-6 space-y-3">
            <h2 className="text-xl font-extrabold tracking-wide">
              {field.title}
            </h2>
            <h3 className="text-gray-500 text-sm italic">{`by ${field["teacher-name"]}`}</h3>
            <p className="tracking-wide font-bold">
              {field["short-description"]}
            </p>
            <span className="text-sm font-extrabold">{`${field.comments} Comments`}</span>
          </div>
        </div>
        <hr className="border mt-2 md:hidden" />
        <div className="md:my-auto mt-6">
          <div className="md:col-span-1 h-full">
            <p className="font-bold text-xl text-center">{field.duration}</p>
            <div className="text-center mt-2">
              <Button
                className="font-bold uppercase hover:scale-95 transform transition-all ease-in-out w-44 shadow-stacked"
                title="enroll"
              />
            </div>
            <div className="my-auto flex mt-6 w-56 mx-auto">
              <input type="checkbox" className="mt-2" />
              <p className="ml-2 text-sm">
                I accept the terms and conditions applied to this course.
              </p>
            </div>
          </div>
        </div>
        <hr className="border mt-3 md:hidden" />
      </div>
      <div className="m-3 rounded-xl p-6 shadow-stacked">
        <div>
          <h2 className="text-lg font-bold">About this course</h2>
        </div>
        <div className="mt-3">
          <p className="text-sm">{slicedAbout}</p>
        </div>
        <div className="flex mt-3 cursor-pointer" onClick={handleSliceClicked}>
          {isAboutSliced ? (
            <>
              <AiOutlinePlusCircle className="my-auto text-primary-dark" />
              <span className="text-sm ml-1 text-primary-dark">See more</span>
            </>
          ) : (
            <>
              <AiOutlineMinusCircle className="my-auto text-primary-dark" />
              <span className="text-sm ml-1 text-primary-dark">See less</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(CourseDetail);
