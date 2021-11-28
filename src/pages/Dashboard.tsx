import React, { useEffect } from "react";
import { ImSpinner9 } from "react-icons/im";
import { courseAll } from "../actions/course.action";
import {
  allCourses as allSelector,
  courseLoadingSelector,
} from "../selectors/course.selector";
import { userData } from "../selectors/user.selector";
import CourseCards from "../sharedComponents/Cards/CourseCards";
import ProgressBar from "../sharedComponents/ProgressBar";
import { store, useAppSelector } from "../Store/store";
import hourglass from '../Images/hourglass.png';
import thisWeek from '../Images/thisWeek.png';
import today from '../Images/today.png';

interface Props { }

const Dashboard: React.FC<Props> = () => {

  const allCoursesData = useAppSelector(allSelector);
  const isLoading = useAppSelector(courseLoadingSelector);
  const timeBank = useAppSelector(userData)?.time_bank;

  useEffect(() => {
    store.dispatch(courseAll(1, 100));
  }, []);

  return (
    <div className="py-10 px-5">
      <div className="flex flex-row space-x-4">
        <ProgressBar
          progressClassName={"mx-auto h-36 w-36"}
          className="w-1/2"
          percentage="0"
          data={timeBank}
        />
        <div className="w-1/2 border-2 border-primary-dark rounded-lg px-4 flex flex-col justify-around">
          <div className="flex flex-row items-center space-x-4">
            <img src={hourglass} className="max-h-12 bg-blue-400 rounded-full" alt="balance" />
            <div className="flex flex-row space-x-2 items-center">
              <span className="text-sm font-medium">Balanced Time: </span>
              <span className="font-semibold text-base">{timeBank?.time}</span>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <img src={thisWeek} className="max-h-12 bg-red-400 rounded-full" alt="thisWeek" />
            <div className="flex flex-row space-x-2 items-center">
              <span className="text-sm font-medium">Earned Time This Week: </span>
              <span className="font-semibold text-base">{timeBank?.time}</span>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <img src={today} className="max-h-12 bg-yellow-400 rounded-full" alt="today" />
            <div className="flex flex-row space-x-2 items-center">
              <span className="text-sm font-medium">Spent Time This Week: </span>
              <span className="font-semibold text-base">{timeBank?.time}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="m-auto">
        <div className="md:flex flex-row text-2xl justify-center font-bold py-4 mt-14">
          <span className="text-on-secondary text-center">
            Upcoming Classes
          </span>
        </div>

        {isLoading && (
          <div>
            <ImSpinner9 className="animate-spin my-5 w-12 h-12 mx-auto" />
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 gap-2 mt-5 mx-auto">
          {allCoursesData?.slice(3).map((item, index) => {
            return <CourseCards indexImage={index} className="mb-5" data={item} />;
          })}
        </div>
      </div>
      <div className="m-2">
        <div className="md:flex flex-row text-2xl justify-center font-bold py-4 mt-14">
          <span className="text-on-secondary">Enrolled Classes</span>
        </div>
        {isLoading && (
          <div>
            <ImSpinner9 className="animate-spin my-5 w-12 h-12 mx-auto" />
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 gap-2 mt-5 mx-auto">
          {allCoursesData?.slice(3).map((item, index) => {
            return <CourseCards indexImage={index} key={index} className="mb-5" data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default React.memo(Dashboard);
