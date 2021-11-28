import React, { useEffect, useState } from "react";
import CourseImage from "../Images/coursedefault.jpg";
import Button from "../sharedComponents/button/Button";
import { AiOutlinePlusCircle } from "react-icons/all";
import { store, useAppSelector } from "../Store/store";
import { useParams } from "react-router";
import { courseId } from "../actions/course.action";
import { courseById } from "../selectors/course.selector";

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  useEffect(() => {
    store.dispatch(courseId(+id));
  }, [id]);

  const courseData = useAppSelector(courseById)[+id];

  const [isAboutSliced, setIsAboutSliced] = useState(true);

  const slicedAbout = isAboutSliced
    ? courseData?.description.substring(0, 200)
    : courseData?.description;

  const fullName =
    courseData?.creator?.user_info?.first_name +
    " " +
    courseData?.creator?.user_info?.last_name;

  const handleSliceClicked = () => {
    setIsAboutSliced(!slicedAbout);
  };

  return (
    <div>
      <div className="md:grid md:grid-cols-4 md:px-16 lg:px-24">
        <div className="md:col-span-1 h-52 mt-6">
          <img
            src={CourseImage}
            alt="courseimage"
            className="w-44 rounded-xl border-1 border-primary-dark shadow-stacked mx-auto object-cover h-full object-center"
          />
        </div>
        <div className="md:col-span-2 md:my-auto text-center md:text-left">
          <div className="h-full mt-10 mx-6 space-y-3">
            <h2 className="text-xl font-extrabold tracking-wide">
              {courseData?.title}
            </h2>
            <h3 className="text-gray-500 text-sm italic">{`by ${fullName}`}</h3>
            <p className="tracking-wide font-bold">{courseData?.summary}</p>
            <span className="text-sm font-extrabold">{`0 Comments`}</span>
          </div>
        </div>
        <hr className="border mt-2 md:hidden" />
        <div className="md:my-auto mt-6">
          <div className="md:col-span-1 h-full">
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
      <div className="m-3 rounded-xl p-6 shadow-stacked md:mx-10 md:mt-6">
        <div>
          <h2 className="text-lg font-bold">About this course</h2>
        </div>
        <div className="mt-3">
          <p className="text-sm">{slicedAbout}</p>
        </div>
        <div className="flex mt-3 cursor-pointer" onClick={handleSliceClicked}>
          {isAboutSliced && courseData?.description.length > 400 && (
            <>
              <AiOutlinePlusCircle className="my-auto text-primary-dark" />
              <span className="text-sm ml-1 text-primary-dark">See more</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(CourseDetail);
