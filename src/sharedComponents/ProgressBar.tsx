import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
interface Props {
  percentage: any;
}

const ProgressBar: React.FC<Props> = ({ percentage }) => {
  return (
    <div className=" w-3/12 h-52 p-2 border-2 hover:shadow-stacked cursor-pointer transform  transition-ease duration-700 hover:scale-95 rounded-md border-primary-lite flex flex-col">
      <span className="p-3 text-lg font-extrabold">Time Chart</span>
      <CircularProgressbar
        strokeWidth={13}
        value={percentage}
        styles={buildStyles({
          textSize: "14px",
          trailColor: "#3C5654",
          pathColor: "#C89C32",
        })}
        className="w-28 h-28 mb-2 transform motion-reduce:transform-none "
      />
      <div className="flex flex-row my-auto">
        <div className="h-3 w-3 mx-2 my-auto bg-primary-dark "></div>
        <div className="text-xs font-medium ">Remaining Time</div>
      </div>
      <div className="flex flex-row my-auto">
        <div className="h-3 w-3 mx-2 my-auto bg-secondary-dark"></div>
        <div className="text-xs font-medium ">Time Spent</div>
      </div>
    </div>
  );
};

export default React.memo(ProgressBar);
