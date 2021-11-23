import React from "react";
import CourseCards from "../sharedComponents/Cards/CourseCards";
import ProgressBar from "../sharedComponents/ProgressBar";
interface Props {}
const Dashboard: React.FC<Props> = () => {
  return (
    <div className="p-10">
      <div>
        <ProgressBar
          className={"mx-auto"}
          percentage="56"
          height={"1/2"}
          width={"1/2"}
        />
      </div>
      <div className=" m-auto">
        <div className=" md:flex flex-row text-2xl font-bold py-4 m-2 text-center">
          <span className="text-on-secondary">Upcoming Classes</span>
        </div>
        <div className="md:flex flex-row justify-between">
          <CourseCards
            className="mb-5"
            data={{
              "teacher-name": "Utkarsh Gangwar",
              title: "Coding",
              duration: "30:00",
            }}
          />
          <CourseCards
            className="mb-5"
            data={{
              "teacher-name": "Utkarsh Gangwar",
              title: "Coding",
              duration: "30:00",
            }}
          />
          <CourseCards
            className="mb-5"
            data={{
              "teacher-name": "Utkarsh Gangwar",
              title: "Coding",
              duration: "30:00",
            }}
          />
        </div>
      </div>
      <div className="m-2">
        <div className="  md:flex flex-row text-2xl font-bold py-4 m-2 text-center">
          <span className="text-on-secondary">Enrolled Classes</span>
        </div>
        <div className="md:flex flex-row justify-between">
          <CourseCards
            className="mb-5"
            data={{
              "teacher-name": "Utkarsh Gangwar",
              title: "Coding",
              duration: "30:00",
            }}
          />
          <CourseCards
            className="mb-5"
            data={{
              "teacher-name": "Utkarsh Gangwar",
              title: "Coding",
              duration: "30:00",
            }}
          />
          <CourseCards
            className="mb-5"
            data={{
              "teacher-name": "Utkarsh Gangwar",
              title: "Coding",
              duration: "30:00",
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default React.memo(Dashboard);
