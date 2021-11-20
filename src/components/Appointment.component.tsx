import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import SelectTag from '../sharedComponents/Select';

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

  const hrs: String[] = [];
  for (let i = 0; i < 12; i++) {
    let str = "";
    if (i < 10) str = str + "0" + i.toString();
    else str = str + i.toString();
    hrs.push(str);
  }

  const min: String[] = [];
  for (let i = 0; i < 60; i++) {
    let str = "";;
    if (i < 10) str = str + "0" + i.toString();
    else str = str + i.toString();
    min.push(str);
  }

  const [appointment, setAppointment] = useState<Number[]>([1]);

  return (
    <div className="border p-3 rounded-lg bg-white">
      <div className="flex justify-center">
        <button className="p-2" onClick={() => setAppointment((prev) => prev.concat(1))}>
          <AiOutlinePlusCircle />
        </button>
        <h1 className="text-center lg:text-xl font-bold p-2">Appointment Details</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {appointment.map((value, index) => {
          return <div className="lg:text-lg flex flex-col space-y-2 border p-2 rounded-lg">
              <div className="flex flex-row justify-between items-center">
                <span>Duration:</span>
                <SelectTag name="min" options={min.slice(10, 46)} label="Minutes" />
              </div>
              <div className="flex flex-row justify-between items-center">
                <span>Select Day:</span>
                <SelectTag name="days" options={days} label="Days" className="self-center" />
              </div>
              <div className="flex flex-row justify-between items-center">
                <span className="">Start Time:</span>
                <div className="flex space-x-1 lg:space-x-3 items-center">
                  <SelectTag name="hrs" options={hrs} label="Hours" />
                  <p className="font-bold">:</p>
                  <SelectTag name="min" options={min} label="Minutes" />
                </div>
              </div>
            </div>
        })}
      </div>

    </div>
  );
}