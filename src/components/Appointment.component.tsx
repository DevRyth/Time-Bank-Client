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


        <div className="flex justify-center ">

        <button className="p-2">
          <AiOutlinePlusCircle />
        </button>

        <h1 className="text-center font-bold p-2">Appointment Details</h1>
        </div>
        <div className="flex space-x-7 justify-center ">
        
          <select name="days " className="w-min border border-black rounded-md">
            <option selected>Days</option>
            {days.map((item) => (
              <option>{item}</option>
            ))}
          </select>
          <div className=" flex space-x-1">
          <select className=" border border-black rounded-md 	w-24" name="min">
            <option selected>min</option>
            {min.map((item) => (
              <option>{item}</option>
            ))}
          </select>
          <p className="font-bold">
              :</p>
          <select name="sec" className=" border border-black w-24 rounded-md">
            <option selected>sec</option>
            {min.map((item) => (
              <option>{item}</option>
            ))}
          </select>
          </div>
        </div>
      </div>
         </div>
  );
}
