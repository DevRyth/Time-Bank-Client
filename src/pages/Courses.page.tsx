import React from "react";
import Button from "../sharedComponents/button/Button";
import Input from "../sharedComponents/input/Input";
import { AiOutlineSearch } from "react-icons/all";
import CourseCards from "../sharedComponents/Cards/CourseCards";
import { Link } from "react-router-dom";

const Courses: React.FC = () => {
  const fields = [
    {
      "teacher-name": "Shivam Yadav",
      title: "Course 1: xyz",
      duration: "00:10:00",
    },
    {
      "teacher-name": "Abhishek Kumar Singh  ",
      title: "Course 2: Coding",
      duration: "00:30:00",
    },
    {
      "teacher-name": "Shivam Yadav",
      title: "Course 3: abc",
      duration: "00:15:30",
    },
    {
      "teacher-name": "Utkarsh Gangwar",
      title: "Course 1: xyz",
      duration: "00:10:00",
    },
    {
      "teacher-name": "Shivam Yadav",
      title: "Course 1: abc",
      duration: "00:10:00",
    },
    {
      "teacher-name": "Shivam Yadav",
      title:
        "Course 1: Learn asjdfals kdjfklajd askdlfj lkasd jflkj ajsdh fjkadf asdj adfjkkasdjfkf",
      duration: "00:10:00",
    },
    {
      "teacher-name": "Shivam Yadav",
      title:
        "Course 1: Learn asjdfals kdjfklajd askdlfj lkasd jflkj ajsdh fjkadf asdj adfjkkasdjfkf",
      duration: "00:10:00",
    },
    {
      "teacher-name": "Shivam Yadav",
      title:
        "Course 1: Learn asjdfals kdjfklajd askdlfj lkasd jflkj ajsdh fjkadf asdj adfjkkasdjfkf",
      duration: "00:10:00",
    },
    {
      "teacher-name": "Shivam Yadav",
      title:
        "Course 1: Learn asjdfals kdjfklajd askdlfj lkasd jflkj ajsdh fjkadf asdj adfjkkasdjfkf",
      duration: "00:10:00",
    },
    {
      "teacher-name": "Shivam Yadav",
      title:
        "Course 1: Learn asjdfals kdjfklajd askdlfj lkasd jflkj ajsdh fjkadf asdj adfjkkasdjfkf",
      duration: "00:10:00",
    },
  ];
  return (
    <div className="mt-10 mb-5">
      <div className="text-center text-3xl font-extrabold md:text-5xl">
        Courses
      </div>
      <div className="pt-5 md:flex justify-center md:pt-10">
        <label htmlFor="search"></label>
        <Input
          children={<AiOutlineSearch fontSize="1.2rem" />}
          type="text"
          placeholder="Search Courses"
          name="search"
          className="text-center text-base md:w-72 lg:w-96"
        />
        <div className="text-center pt-2 md:pl-3">
          <Button
            title="search"
            type="submit"
            className="mx-auto font-medium tracking-wider"
          />
        </div>
      </div>

      <div className="px-5 lg:px-16 mt-5 py-2 space-y-4 md:pt-10 grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-3 md:space-y-0">
        {Array(10)
          .fill(1)
          .map((item, index) => (
            <Link to="/courses/1">
              <CourseCards data={fields[index]} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default React.memo(Courses);
