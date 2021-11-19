import React from "react";

import Input from "../sharedComponents/input/Input";
interface Props {}
const CourseRegister: React.FC<Props> = () => {
  return (
    // <div className=" bg-on-secondary px-4  pt-6 h-screen w-screen sm:">
    <div className="p-6 font-extrabold h-screen lg:text-3xl">
      Register for course
      <div className="  bg-white p-4  m-4 max-h rounded-lg font-bold sm:h-2/5  md:h-2/3 lg:h-2/3">
        Course Details
        <div className="p-2 lg:p-8 lg:pt-12">
          <Input
            className="text-primary-dark pt-2 "
            outerClassName="border rounded-lg "
            type="text"
            name="Title"
            placeholder="Title"
            children={undefined}
          ></Input>
          <textarea
            rows={1}
            cols={23}
            className="border border-gray-600 resize rounded-lg text-base px-3 py-3"
            placeholder="What you will learn"
          ></textarea>
          {/* <Input
            className="text-primary-dark pt-2"
            outerClassName="border p-0 rounded-lg "
            type="text"
            name="What you will learn"
            placeholder="What you will learn"
            children={undefined}
          ></Input> */}
        </div>
      </div>
    </div>
    // </div>
  );
};
export default CourseRegister;
