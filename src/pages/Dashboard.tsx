import React, { useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { courseAll } from "../actions/course.action";
import { courseLoadingSelector } from "../selectors/course.selector";
import { userData } from "../selectors/user.selector";
import CourseCards from "../sharedComponents/Cards/CourseCards";
import ProgressBar from "../sharedComponents/ProgressBar";
import { store, useAppSelector } from "../Store/store";
import hourglass from "../Images/hourglass.png";
import thisWeek from "../Images/thisWeek.png";
import today from "../Images/today.png";
import axios from "axios";
import { BASE_URL } from "../constants/constants";
import { AiOutlinePlusCircle } from "react-icons/ai";

interface Props {}

const Dashboard: React.FC<Props> = () => {
  const isLoading = useAppSelector(courseLoadingSelector);
  const timeBank = useAppSelector(userData)?.time_bank;
  const [enrolledCourses, setEnrolledCourses] = useState<any[]>();

  useEffect(() => {
    store.dispatch(courseAll(1, 100));
    async function getEnrolledCourses() {
      try {
        const response = await axios.get(`${BASE_URL}/my-enroll`);
        console.log("Enrolled Classes Data: ", response.data);
        setEnrolledCourses(response.data);
      } catch (e) {
        console.error("Not able to fetch enrolled courses");
      }
    }
    getEnrolledCourses();
  }, []);

  const [seeMore, setSeeMore] = useState(4);

  return (
    <div className="py-10 px-5">
      <div className="flex items-center space-y-4 md:space-y-0 flex-col md:flex-row md:space-x-4">
        <ProgressBar
          progressClassName={"mx-auto h-36 w-36"}
          className="md:w-1/2 h-80 w-full transform transition-ease duration-200 hover:scale-95"
          percentage="0"
          data={timeBank}
        />
        <div className="md:w-1/2 w-full border-2 h-80 transform transition-ease duration-200 hover:scale-95 cursor-pointer hover:shadow-stacked border-primary-dark rounded-lg p-4 flex flex-col justify-around">
          <div className="flex flex-row items-center space-x-4">
            <img
              src={hourglass}
              className="max-h-12 bg-blue-400 rounded-full"
              alt="balance"
            />
            <div className="flex flex-row space-x-2 items-center">
              <span className="text-sm font-medium">Balanced Time: </span>
              <span className="font-semibold text-base">{timeBank?.time}</span>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <img
              src={thisWeek}
              className="max-h-12 bg-red-400 rounded-full"
              alt="thisWeek"
            />
            <div className="flex flex-row space-x-2 items-center">
              <span className="text-sm font-medium">
                Earned Time This Week:{" "}
              </span>
              <span className="font-semibold text-base">{timeBank?.time}</span>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <img
              src={today}
              className="max-h-12 bg-yellow-400 rounded-full"
              alt="today"
            />
            <div className="flex flex-row space-x-2 items-center">
              <span className="text-sm font-medium">
                Spent Time This Week:{" "}
              </span>
              <span className="font-semibold text-base">{timeBank?.time}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="m-auto">
        <div className="flex flex-row text-2xl justify-center font-bold py-4 mt-14">
          <span className="text-on-secondary text-center">
            Upcoming Classes
          </span>
        </div>

        {/* {isLoading && (
          <div>
            <ImSpinner9 className="animate-spin my-5 w-12 h-12 mx-auto" />
          </div>
        )} */}
        <div className="text-center text-2xl font-bold text-secondary-dark">
          No Classes For Today
        </div>
      </div>
      <div className="m-6">
        <div className="flex flex-row text-2xl justify-center font-bold py-4 mt-14">
          <span className="text-on-secondary">Enrolled Classes</span>
        </div>
        {isLoading && (
          <div>
            <ImSpinner9 className="animate-spin my-5 w-12 h-12 mx-auto" />
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 gap-2 mt-5 mx-auto">
          {enrolledCourses?.slice(0, seeMore)?.map((item, index) => {
            return (
              <CourseCards
                indexImage={index}
                key={index}
                className="mb-5"
                data={item.course}
              />
            );
          })}
        </div>
        {enrolledCourses && enrolledCourses?.length > seeMore && (
          <div
            className="flex mx-auto my-10 bg-secondary-dark max-w-max px-4 py-2 rounded-xl cursor-pointer"
            onClick={() => setSeeMore(seeMore + 4)}
          >
            <AiOutlinePlusCircle className="my-auto h-6 w-6 text-white" />
            <span className="ml-1 text-white text-lg">See more</span>
          </div>
        )}
      </div>
    </div>
  );
};
export default React.memo(Dashboard);
