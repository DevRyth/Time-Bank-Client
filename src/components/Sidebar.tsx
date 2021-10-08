import React from "react";
interface Props {
  name: string;
  email: string;
}
const Sidebar: React.FC<Props> = (props) => {
  return (
    <div className="w-max h-screen bg-gray-800">
      <div className="">
        <img
          className="rounded-full w-1/2 p-5 "
          src="https://imgur.com/aFFF1uw.jpg"
          alt=""
        />
        <h2 className="text-white">{props.name}</h2>
        <h3 className="text-white text-opacity-20">{props.email}</h3>
      </div>
      <div>
        <li className="list-none border-b-2 border-gray-600">
          <a href="">Dashboard</a>
        </li>
        <li className="list-none border-b-2 border-gray-600">
          <a href="">Statistics</a>
        </li>
        <li className="list-none border-b-2 border-gray-600">
          <a href="">Courses</a>
        </li>
        <li className="list-none border-b-2 border-gray-600">
          <a href="">Logout</a>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
