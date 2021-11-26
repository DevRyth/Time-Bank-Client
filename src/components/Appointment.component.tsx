import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Select from "../sharedComponents/Select";

interface Props {
  formikValues: {
    values: {
      title: string;
      difficulty: string;
      summary: string;
      schedule: {
        appointment: {
          mm: string;
          hh: string;
          duration: string;
          day: string;
        };
      }[];
    };
    touched: any;
    errors: any;
    handleChange: any;
  };
  setSchedule: React.Dispatch<
    React.SetStateAction<
      {
        appointment: {
          mm: string;
          hh: string;
          duration: string;
          day: string;
        };
      }[]
    >
  >;
  schedule: {
    appointment: {
      mm: string;
      hh: string;
      duration: string;
      day: string;
    };
  }[];
}

const Appointment: React.FC<Props> = ({
  formikValues,
  setSchedule,
  schedule,
}) => {
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
    let str = "";
    if (i < 10) str = str + "0" + i.toString();
    else str = str + i.toString();
    min.push(str);
  }

  console.log("Schedule: ", schedule);

  // const [appointment, setAppointment] = useState<Number[]>([1]);

  return (
    <div className="border-2 border-primary-dark p-3 rounded-lg bg-white">
      <div className="flex justify-center">
        <button
          type="button"
          className="p-2"
          onClick={() =>
            setSchedule((prev) => {
              let newSchedule = [...prev];
              newSchedule.push({
                appointment: {
                  mm: "",
                  hh: "",
                  duration: "",
                  day: "",
                },
              });
              return newSchedule;
            })
          }
        >
          <AiOutlinePlusCircle />
        </button>
        <h1 className="text-center lg:text-xl font-bold p-2">
          Appointment Details
        </h1>
      </div>

      <div
        className={`grid grid-cols-1 gap-4 p-3 ${
          schedule.length <= 1 ? "lg:grid-cols-1" : "lg:grid-cols-2"
        }`}
      >
        {schedule.map((value, index) => {
          return (
            <div
              key={index}
              className="lg:text-lg flex flex-col space-y-2 border p-4 rounded-lg shadow-stacked border-primary-lite"
            >
              <div className="flex flex-row justify-between items-center">
                <span>Duration</span>
                <Select
                  onChange={formikValues.handleChange}
                  value={
                    formikValues.values.schedule[index]?.appointment.duration
                  }
                  name={`schedule[${index}].appointment.duration`}
                  options={min.slice(10, 46)}
                  label="Minutes"
                  className="text-sm"
                />
              </div>
              <div className="flex flex-row justify-between items-center">
                <span>Select Day</span>
                <Select
                  onChange={formikValues.handleChange}
                  value={formikValues.values.schedule[index]?.appointment.day}
                  name={`schedule[${index}].appointment.day`}
                  options={days}
                  label="Days"
                  className="self-center text-sm"
                />
              </div>
              <div className="flex flex-row justify-between items-center space-x-3">
                <span className="">Start Time</span>
                <div className="flex space-x-1 lg:space-x-3 items-center">
                  <Select
                    onChange={formikValues.handleChange}
                    value={formikValues.values.schedule[index]?.appointment.hh}
                    name={`schedule[${index}].appointment.hh`}
                    options={hrs}
                    label="Hours"
                    className="text-sm"
                  />
                  <p className="font-bold">:</p>
                  <Select
                    onChange={formikValues.handleChange}
                    value={formikValues.values.schedule[index]?.appointment.mm}
                    name={`schedule[${index}].appointment.mm`}
                    options={min}
                    label="Minutes"
                    className="text-sm"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(Appointment);
