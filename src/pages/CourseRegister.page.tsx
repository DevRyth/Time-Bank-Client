import React from "react";
import Input from "../sharedComponents/input/Input";
import { MdTitle } from "react-icons/md";

interface Props {}

const CourseRegister: React.FC<Props> = () => {
  return (
    // <div className=" bg-on-secondary px-4  pt-6 h-screen w-screen sm:">
    <div className="bg-white p-4 max-h rounded-lg font-bold lg:text-xl">
      Course Details
      <div className="flex flex-col space-y-4 p-2 lg:p-8">
        <div className="flex flex-col space-y-4 lg:space-y-2 lg:flex-row">
          <label className="flex flex-col space-y-2 lg:flex-1">
            <span>Title</span>
            <Input
              className="text-primary-dark pt-2"
              outerClassName="border p-0 rounded-lg w-full"
              type="text"
              name="Title"
              placeholder="Title"
            >
              <MdTitle />
            </Input>
          </label>

          <label className="flex flex-col space-y-0 lg:flex-1 px-4">
            <span>Difficulty</span>

            <label className="flex justify-around border  border-gray-800 py-3 rounded-lg ">
              <label className="space-x-1 flex flex-row items-center">
                <span> Easy</span>
                <input className="" type="radio" name="difficulty"></input>
              </label>

              <label className="space-x-1 my-auto">
                <span>Medium</span>
                <input className="" type="radio" name="difficulty"></input>
              </label>

              <label className="space-x-1 my-auto">
                <span>Hard</span>
                <input className="" type="radio" name="difficulty"></input>
              </label>
            </label>
          </label>
        </div>

        <label className="flex flex-col space-y-2">
          <span>Description</span>
          <textarea
            rows={1}
            cols={23}
            className="border border-gray-600 rounded-lg w-full h-96 text-base p-2"
            placeholder="What you will learn"
          ></textarea>
        </label>
      </div>
    </div>
  );
};
export default CourseRegister;
