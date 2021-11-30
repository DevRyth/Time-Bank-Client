import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { TimeBank } from "../Models/AuthUser";
interface Props {
  percentage: any;
  progressClassName: string;
  className?: string;
  data?: TimeBank;
}

const ProgressBar: React.FC<Props> = ({
  percentage,
  progressClassName,
  className,
  data,
}) => {
  return (
    <div
      className={`p-2 border-2 hover:shadow-stacked cursor-pointer rounded-md border-primary-lite flex flex-col ${className}`}
    >
      <span className="p-3 text-lg font-extrabold">Time Chart</span>
      <CircularProgressbar
        strokeWidth={13}
        value={percentage}
        styles={buildStyles({
          textSize: "14px",
          trailColor: percentage === "0" ? "#DDDDDD" : "#3C5654",
          pathColor: "#C89C32",
        })}
        className={`mb-2 mx-auto transform motion-reduce:transform-none ${progressClassName}`}
      />
      <div className="flex justify-around px-4 py-8">
        <div className="flex flex-row my-auto">
          <div className="h-3 w-3 mx-2 my-auto bg-primary-dark "></div>
          <div className="text-sm font-medium ">
            Earned:{" "}
            <span className="font-semibold text-base">{data?.earnedTime}</span>
          </div>
        </div>
        <div className="flex flex-row my-auto">
          <div className="h-3 w-3 mx-2 my-auto bg-secondary-dark"></div>
          <div className="text-sm font-medium ">
            Used:{" "}
            <span className="font-semibold text-base">{data?.usedTime}</span>
          </div>
        </div>
        <div className="flex flex-row my-auto">
          <div className="h-3 w-3 mx-2 my-auto bg-red-800"></div>
          <div className="text-sm font-medium ">
            Credits:{" "}
            <span className="font-semibold text-base">{data?.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProgressBar);
