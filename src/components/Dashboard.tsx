import React, { useEffect } from "react";
import { ImSpinner9 } from "react-icons/im";
import { courseAll } from "../actions/course.action";
import {
  allCourses as allSelector,
  courseLoadingSelector,
} from "../selectors/course.selector";
import CourseCards from "../sharedComponents/Cards/CourseCards";
import ProgressBar from "../sharedComponents/ProgressBar";
import { store, useAppSelector } from "../Store/store";
interface Props {}
const Dashboard: React.FC<Props> = () => {
  const allCoursesData = useAppSelector(allSelector);
  const isLoading = useAppSelector(courseLoadingSelector);

  useEffect(() => {
    store.dispatch(courseAll(1, 100));
  }, []);

  return (
    <div className="py-10 px-5">
      <div>
        <ProgressBar className={"mx-auto"} percentage="56" />
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
            return <CourseCards key={index} className="mb-5" data={item} />;
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
            return <CourseCards key={index} className="mb-5" data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default React.memo(Dashboard);
