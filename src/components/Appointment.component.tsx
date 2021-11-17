import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

export default function Appointment() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const min = [];
  for (let i = 1; i <= 59; i++) min.push(i);
  return (
    <div>
      <div className="border border-gray-900  	 p-3 ">
        <button className="p-1">
          <AiOutlinePlusCircle />
        </button>
        <h1 className="text-center font-bold ">Appointment Details</h1>
        <div className="flex space-x-5 justify-center ">
          <select name="days" className="h-6	">
            <option selected>Days</option>
            {days.map((item) => (
              <option>{item}</option>
            ))}
          </select>
          <select className="h-5" name="min">
            <option selected>min</option>
            {min.map((item) => (
              <option>{item}</option>
            ))}
          </select>

          <select name="sec">
            <option selected>sec</option>
            {min.map((item) => (
              <option>{item}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
