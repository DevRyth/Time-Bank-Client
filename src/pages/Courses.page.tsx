import React from "react";
import Button from "../sharedComponents/button/Button";
import Input from "../sharedComponents/input/Input";
import { AiOutlineSearch } from "react-icons/all";
import CourseCards from "../sharedComponents/Cards/CourseCards";

const Courses: React.FC = () => {
  return (
    <div className="mt-5">
      <div className="text-center text-3xl font-extrabold md:text-4xl">
        Courses
      </div>
      <div className="pt-5">
        <label htmlFor="search"></label>
        <Input
          children={<AiOutlineSearch fontSize="1.2rem" />}
          type="text"
          placeholder="Search Courses"
          name="search"
          className="text-center text-base md:w-72 lg:w-96"
        />
        <div className="text-center pt-2">
          <Button
            title="search"
            type="submit"
            className="mx-auto font-medium tracking-wider"
          />
        </div>
      </div>

      <div className="px-5 mt-5 py-2 space-y-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:space-y-0 bg-gray-100">
        {Array(10)
          .fill(1)
          .map((item) => (
            <CourseCards />
          ))}
      </div>
    </div>
  );
};

export default React.memo(Courses);
