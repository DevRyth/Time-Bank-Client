import React, { useState } from "react";
// import CourseDefaultImage from "../../Images/coursedefault.jpg"; removeInFuture
import {
  MdFavoriteBorder,
  BiTimeFive,
  MdFavorite,
  AiFillDelete,
} from "react-icons/all";
import { Link } from "react-router-dom";
import { CourseData } from "../../Models/Course";
import { imagesUrl } from "../../constants/image_constants";
import axios from "axios";
import { BASE_URL } from "../../constants/constants";

interface Props {
  data: CourseData;
  className?: string;
  indexImage: number; //removeInFuture
}

const CourseCards: React.FC<Props> = ({ data, className, indexImage }) => {
  const [isFavouriteClicked, setIsFavouriteClicked] = useState(false);
  const slicedTitle = data?.title.substring(0, 40);

  return (
    <div className={`mx-auto md:mx-0 ${className}`}>
      <div className="h-80 w-72 cursor-pointer rounded-tl-lg mx-auto shadow-stacked hover:scale-95 transform ease-in-out transition-all">
        <Link to={`/courses/${data?.course_id}`}>
          <div className="bg-gray-300 h-1/2">
            <img
              src={imagesUrl[indexImage % imagesUrl.length]}
              className="h-full w-full object-cover object-center"
              alt="courseImage"
            />
          </div>
          <div className="rounded-br-lg px-6 pt-3 bg-white h-1/2">
            <div className="">{data?.creator?.user_info.first_name}</div>
            <div className="font-extrabold mt-2 text-lg h-16">
              {slicedTitle}
            </div>
            <div className="flex justify-between ">
              <div className="flex">
                {isFavouriteClicked ? (
                  <MdFavorite
                    onClick={(event) => {
                      setIsFavouriteClicked(false);
                      event.preventDefault();
                    }}
                    className="text-red-600 h-5 w-5 my-auto"
                  />
                ) : (
                  <MdFavoriteBorder
                    onClick={(event) => {
                      setIsFavouriteClicked(true);
                      event.preventDefault();
                    }}
                    className="text-primary-dark h-5 w-5 my-auto"
                  />
                )}
              </div>
              <div
                className="flex"
                onClick={async (event) => {
                  event.preventDefault();
                  if(window.confirm("Are you sure to delete the course")) {
                    const response = await axios.delete(BASE_URL+"/delete-course", {params: {course_id: data.course_id}});
                    if(response.status === 200) window.location.href = "/dashboard";
                  }
                }}
              >
                <AiFillDelete className="text-red-700 h-5 w-5 my-auto" />
              </div>
              <div className="flex ">
                <BiTimeFive className="m-auto mr-3 text-primary-dark h-10" />
                <span className="my-auto">Tuesday, 10:00</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default React.memo(CourseCards);
