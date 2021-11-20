import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { FaFolder } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import Avatar from "../sharedComponents/Avatar";
import ListElement from "../sharedComponents/ListElement";

interface Props {}
const Sidebar: React.FC<Props> = () => {
  return (
    <div className="hidden md:block bg-primary-dark height md:w-60 md:fixed md:z-10">
      <div className="bg-primary-lite p-2">
        <Avatar
          url="https://imgur.com/aFFF1uw.jpg"
          shape="circular"
          className="h-28 w-28 self-center mx-auto my-2"
        />
        <h2 className="text-white text-center text-xl font-medium tracking-wider">
          Utkarsh Gangwar
        </h2>
        <h3 className="text-white text-xs text-opacity-20 text-center mb-2">
          utkarshgangwar@gmail.com
        </h3>
      </div>
      <div className="mt-5">
        <ListElement
          title="Dashboard"
          path="/dashboard"
          icon={<AiOutlineHome className="text-white my-auto " />}
          className={
            "list-none hover:bg-primary-lite cursor-pointer border-b p-3 text-base text-white font-semibold text-center tracking-wider border-gray-600"
          }
        />
        <ListElement
          title="Statistics"
          path="/statics"
          icon={<IoIosStats className="text-white my-auto " />}
          className={
            "list-none hover:bg-primary-lite cursor-pointer border-b p-3 text-base text-white font-semibold text-center tracking-wider border-gray-600"
          }
        />
        <ListElement
          title="Courses"
          path="/courses"
          icon={<FaFolder className="text-white my-auto " />}
          className={
            "list-none hover:bg-primary-lite cursor-pointer border-b p-3 text-base text-white font-semibold text-center tracking-wider border-gray-600"
          }
        />
        <ListElement
          onClick={() => {
            localStorage.removeItem("auth_token");
            window.location.href = "/";
          }}
          title="Logout"
          icon={<BiLogOutCircle className="text-white my-auto " />}
          className={
            "list-none hover:bg-primary-lite cursor-pointer border-b p-3 text-base text-white font-semibold text-center tracking-wider border-gray-600"
          }
        />
      </div>
    </div>
  );
};

export default Sidebar;
