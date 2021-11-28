import React, { useEffect } from "react";
import Button from "../sharedComponents/button/Button";
import Input from "../sharedComponents/input/Input";
import { AiOutlineSearch, ImSpinner9 } from "react-icons/all";
import CourseCards from "../sharedComponents/Cards/CourseCards";
import { store, useAppSelector } from "../Store/store";
import { courseAll } from "../actions/course.action";
import {
  allCourses,
  courseLoadingSelector,
} from "../selectors/course.selector";

const Courses: React.FC = () => {
  useEffect(() => {
    store.dispatch(courseAll(1, 100));
  }, []);

  const allCoursesData = useAppSelector(allCourses);
  const isLoading = useAppSelector(courseLoadingSelector);
  console.log("allCoursesData", allCoursesData);

  return (
    <div className="mt-10 mb-5">
      <div className="text-center text-3xl font-extrabold md:text-5xl">
        Courses
      </div>
      <div className="pt-5 md:flex justify-center md:pt-10">
        <label htmlFor="search"></label>
        <div className="text-center">
          <Input
            children={<AiOutlineSearch fontSize="1.2rem" />}
            type="text"
            placeholder="Search Courses"
            name="search"
            className="text-base md:w-72 lg:w-96"
            outerClassName="mx-auto"
          />
        </div>
        <div className="text-center pt-2 md:pl-3">
          <Button
            title="search"
            type="submit"
            className="mx-auto font-medium tracking-wider"
          />
        </div>
      </div>

      {isLoading && (
        <ImSpinner9 className="animate-spin my-5 h-12 w-full mx-auto" />
      )}
      <div className="lg:px-16 mt-5 py-2 md:space-x-10 space-y-4 md:pt-10 grid grid-cols-1 gap-y-8 md:grid-cols-1 lg:grid-cols-2 md:space-y-0">
        {allCoursesData.map((item, index) => {
          let className = "";
          if (index === 0) {
            className = "md:ml-10";
          } else className = "";
          return <CourseCards indexImage={index} key={index} data={item} className={className} />;
        })}
      </div>
    </div>
  );
};

export default React.memo(Courses);
