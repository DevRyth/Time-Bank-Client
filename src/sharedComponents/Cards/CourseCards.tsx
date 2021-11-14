import React, { useState } from "react";
import CourseDefaultImage from "../../Images/coursedefault.jpg";
import { MdFavoriteBorder, BiTimeFive, MdFavorite } from "react-icons/all";

interface Props {
  data: { "teacher-name": string; title: string; duration: string };
}

const CourseCards: React.FC<Props> = ({ data }) => {
  const [isFavouriteClicked, setIsFavouriteClicked] = useState(false);
  const slicedTitle = data.title.substring(0, 40);

  return (
    <div className="mx-auto md:mx-0">
      <div className="w-72 h-80 cursor-pointer rounded-tl-lg mx-auto shadow-stacked hover:scale-95 transform ease-in-out transition-all">
        <div className="bg-gray-300 h-1/2">
          <img
            src={CourseDefaultImage}
            className="h-full w-full object-cover object-center"
            alt="courseImage"
          />
        </div>
        <div className="rounded-br-lg px-6 pt-3 bg-white h-1/2">
          <div className="">{data["teacher-name"]}</div>
          <div className="font-extrabold mt-2 text-lg h-16">{slicedTitle}</div>
          <div className="flex justify-between ">
            <div className="flex">
              {isFavouriteClicked ? (
                <MdFavorite
                  onClick={() => setIsFavouriteClicked(false)}
                  className="text-red-600 h-5 w-5 my-auto"
                />
              ) : (
                <MdFavoriteBorder
                  onClick={() => setIsFavouriteClicked(true)}
                  className="text-primary-dark h-5 w-5 my-auto"
                />
              )}
            </div>
            <div className="flex pr-5">
              <BiTimeFive className="my-auto mr-3 text-primary-dark h-10" />
              <span className="my-auto">{data.duration}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CourseCards);
