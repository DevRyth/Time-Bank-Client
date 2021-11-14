import React from "react";

import Input from "../sharedComponents/input/Input";
interface Props {}
const CourseRegister: React.FC<Props> = ({}) => {
  return (
    <div className="bg-background-lite pt-10 h-screen w-screen">
      <div className="h-screen p-8  bg-on-primary-lite">
        Register for course
        <div className=" bg-white w-3/5 p-4  font-bold h-screen">
          Course Details
          <form className="space-y-3">
            <Input
              className="text-primary-dark"
              type="text"
              name="Title"
              placeholder="Title"
              children={undefined}
            ></Input>
            <Input
              className="text-primary-dark"
              type="text"
              name="Discription"
              placeholder="Discription"
              children={undefined}
            ></Input>
            <Input
              className="text-primary-dark"
              type="text"
              name="What you will learn"
              placeholder="What you will learn"
              children={undefined}
            ></Input>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CourseRegister;
