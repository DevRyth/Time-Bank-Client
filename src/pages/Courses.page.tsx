import React, { useEffect, useState } from "react";
import Input from "../sharedComponents/input/Input";
import {
  AiOutlinePlusCircle,
  AiOutlineSearch,
  ImSpinner9,
} from "react-icons/all";
import CourseCards from "../sharedComponents/Cards/CourseCards";
// import { courseAll } from "../actions/course.action";
import axios from "axios";
import { BASE_URL } from "../constants/constants";
import { CourseData } from "../Models/Course";

const Courses: React.FC = () => {
  const [search_query, setSearch_query] = useState("");
  const [searchCourses, setSearchCourses] = useState<CourseData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCourses = async () => {
      setIsLoading(true);
      const response = await axios.get(BASE_URL + "/search-course", {
        params: { search_query: search_query, offset: 1, limit: 20 },
      });
      if (response.status === 200) {
        setSearchCourses(response.data);
      }
      setIsLoading(false);
    };

    getCourses();
  }, [search_query]);

  const [seeMore, setSeeMore] = useState(4);
  // const allCoursesData = useAppSelector(allCourses);
  // console.log("allCoursesData", allCoursesData);

  return (
    <div className="mt-10 mb-5">
      <div className="text-center text-3xl font-extrabold md:text-5xl">
        Courses
      </div>
      <div className="pt-5 md:flex justify-center md:pt-10">
        <label htmlFor="search"></label>
        <div className="text-center">
          <Input
            children={<AiOutlineSearch fontSize="1.2rem" />}
            type="text"
            placeholder="Search Courses"
            name="search"
            className="text-base md:w-72 lg:w-96"
            outerClassName="mx-auto"
            onChange={(e) => {
              setSearch_query(e.target.value);
            }}
          />
        </div>
        {/* <div className="text-center pt-2 md:pl-3">
          <Button
            title="search"
            type="submit"
            className="mx-auto font-medium tracking-wider"
          />
        </div> */}
      </div>

      {isLoading && (
        <ImSpinner9 className="animate-spin my-5 h-12 w-full mx-auto" />
      )}
      <div className="lg:px-16 mt-10 py-2 md:space-x-10 space-y-4 md:pt-10 grid grid-cols-1 gap-y-8 md:grid-cols-1 lg:grid-cols-2 md:space-y-0">
        {searchCourses?.slice(0, seeMore)?.map((item, index) => {
          let className = "";
          if (index === 0) {
            className = "md:ml-10";
          } else className = "";
          return (
            <CourseCards
              indexImage={index}
              key={index}
              data={item}
              className={className}
            />
          );
        })}
      </div>
      {searchCourses.length > seeMore && (
        <div
          className="flex mx-auto my-10 bg-secondary-dark max-w-max px-4 py-2 rounded-xl cursor-pointer"
          onClick={() => setSeeMore(seeMore + 4)}
        >
          <AiOutlinePlusCircle className="my-auto h-6 w-6 text-white" />
          <span className="ml-1 text-white text-lg">See more</span>
        </div>
      )}
    </div>
  );
};

export default React.memo(Courses);
