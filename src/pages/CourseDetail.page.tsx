import React, { useEffect, useState } from "react";
// import CourseImage from "../Images/coursedefault.jpg"; removeInFuture
import Button from "../sharedComponents/button/Button";
import {
  AiOutlinePlusCircle,
  ImSpinner9,
  IoWarningOutline,
} from "react-icons/all";
import { store, useAppSelector } from "../Store/store";
import { useParams } from "react-router";
import { courseId } from "../actions/course.action";
import {
  courseById,
  courseLoadingSelector,
} from "../selectors/course.selector";
import EnrolledCourse from "../components/EnrolledCourse";
import { imagesUrl } from "../constants/image_constants";

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  useEffect(() => {
    store.dispatch(courseId(+id));
  }, [id]);

  const courseData = useAppSelector(courseById)[+id];
  const isLoading = useAppSelector(courseLoadingSelector);

  const [isAboutSliced, setIsAboutSliced] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

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

  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="relative min-h-screen">
      {isLoading && (
        <div className="py-10">
          <ImSpinner9 className="animate-spin h-6 mx-auto w-6" />
        </div>
      )}
      <div className="md:grid md:grid-cols-4 md:px-16 lg:px-24">
        <div className="md:col-span-1 h-52 mt-6">
          <img
            src={imagesUrl[Math.floor(Math.random() * imagesUrl.length)]}
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
            <p className="tracking-wide font-bold pb-3">
              {`${courseData?.summary.substr(0, 200)} ${
                courseData?.summary.length > 200 ? "..." : ""
              }`}
            </p>
            <span className="text-sm italic font-extrabold">{`0 Comments`}</span>
          </div>
        </div>
        <hr className="border mt-2 md:hidden" />
        <div className="md:my-auto mt-6">
          <div className="md:col-span-1 h-full">
            <div className="text-center mt-2">
              <Button
                onClick={() => {
                  if (isChecked) setIsEnrollmentOpen(true);
                  else {
                    setError("Check the input box");
                  }
                }}
                className="font-bold uppercase hover:scale-95 transform transition-all ease-in-out w-44 shadow-stacked"
                title="enroll"
              />
              {!isChecked && (
                <div>
                  <div className="justify-center flex mt-3 text-yellow-600">
                    {error && <IoWarningOutline className="my-auto" />}
                    <p className="ml-2 text-xs">{error}</p>
                  </div>
                </div>
              )}
            </div>
            <div className="my-auto flex mt-6 w-56 mx-auto">
              <input
                type="checkbox"
                className="mt-2"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
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
          <h2 className="text-lg font-bold">What you will learn?</h2>
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
      {isEnrollmentOpen && (
        <div>
          <div className="absolute bg-black opacity-50 transition-transform duration-1000 ease-in-out scale-150 inset-0"></div>
          <div className="absolute bg-primary-lite rounded-3xl border-primary-dark border-2 mt-10 top-0 right-0 left-0 mx-2 md:mx-32">
            <EnrolledCourse
              setIsOpen={() => setIsEnrollmentOpen(!isEnrollmentOpen)}
              data={courseData}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(CourseDetail);
