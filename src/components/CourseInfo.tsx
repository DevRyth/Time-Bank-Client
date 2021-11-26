import React from "react";
import Input from "../sharedComponents/input/Input";

interface Props {
  formikValues: {
    values: any;
    touched: any;
    errors: any;
    handleChange: any;
  };
}

const CourseInfo: React.FC<Props> = ({ formikValues }) => {
  return (
    <div className="bg-white mt-6 mx-0 rounded-lg font-bold lg:text-xl tracking-wider">
      <div className="flex flex-col space-y-6 p-2 lg:p-8 mt-6">
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row">
          <label className="flex flex-col space-y-3 md:space-y-2">
            <span className="text-base">Title</span>
            <Input
              onChange={formikValues.handleChange}
              className="text-primary-dark"
              outerClassName="border rounded-lg"
              type="text"
              name="title"
              placeholder="Title"
              value={formikValues.values.title}
            >
              {undefined}
            </Input>
          </label>

          <label className="flex flex-col space-y-3 md:space-y-2 md:flex-1 md:pl-4">
            <span className="text-base">Difficulty</span>

            <label className="flex text-base space-x-4 justify-around border border-gray-800 p-3 rounded-lg">
              <label className="space-x-1 my-auto">
                <span className="text-sm">Easy</span>
                <input
                  value="easy"
                  onChange={formikValues.handleChange}
                  className=""
                  type="radio"
                  name="difficulty"
                />
              </label>

              <label className="space-x-1 my-auto">
                <span className="text-sm">Medium</span>
                <input
                  value="medium"
                  onChange={formikValues.handleChange}
                  className=""
                  type="radio"
                  name="difficulty"
                />
              </label>

              <label className="space-x-1 my-auto">
                <span className="text-sm">Hard</span>
                <input
                  value="hard"
                  onChange={formikValues.handleChange}
                  className=""
                  type="radio"
                  name="difficulty"
                />
              </label>
            </label>
          </label>
        </div>

        <label className="flex flex-col space-y-2">
          <span className="text-base">Summary</span>
          <textarea
            value={formikValues.values.summary}
            onChange={formikValues.handleChange}
            name="summary"
            className="border border-gray-600 text-primary-dark rounded-lg w-full text-base p-2"
            placeholder="About your skill"
          ></textarea>
        </label>
        <label className="flex pt-3 flex-col space-y-2">
          <span className="text-base">What people will learn?</span>
          <textarea
            value={formikValues.values.description}
            onChange={formikValues.handleChange}
            rows={10}
            cols={23}
            name="description"
            className="border border-gray-600 text-primary-dark rounded-lg w-full text-base p-2"
            placeholder="Descriptive points"
          ></textarea>
        </label>
      </div>
    </div>
  );
};
export default React.memo(CourseInfo);
