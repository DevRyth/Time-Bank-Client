import React from "react";
interface Props {}
const Page404: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="lg:bg-white text-8xl text-blue-600 p-6 font-bold">
        404
      </div>
      <div className="text-6xl text-blue-900 font-bold px-6 w-1/3">
        Ooops! You weren't supposed to see this
      </div>
      <div className="w-1/4 pt-6 text-2xl px-6 font-thin">
        The page you're looking for no longer exists.
      </div>
      <div className="px-6 font-thin text-2xl">
        Return to the home page and remember you haven't seen anything.
      </div>
    </>
  );
};
export default Page404;
