import React from "react";
interface Props {}
const Page404: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="bg-white text-5xl text-blue-600 p-8 pt-20 font-bold sm:px-12 md:text-6xl">
        404
      </div>
      <div className="text-2xl text-blue-900 font-bold px-8 w-1/1 sm:px-10 sm:w-1/2 lg:w-1/3">
        Ooops! You weren't supposed to see this
      </div>
      <div className="pt-6 text-sm px-8 font-thin w-1/1 sm:px-10">
        The page you're looking for no longer exists.
      </div>
      <div className="px-8 font-thin text-sm sm:px-10">
        Return to the home page and remember you haven't seen anything.
      </div>
    </>
  );
};
export default Page404;
