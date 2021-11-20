import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaFolder } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { Link } from "react-router-dom";
import Avatar from "../sharedComponents/Avatar";
import ListElement from "../sharedComponents/ListElement";

interface Props {
  name: string;
  email: string;
}
const Sidebar: React.FC<Props> = ({ name, email }) => {
  return (
    <div className="hidden sm:block bg-primary-dark height w-60 fixed z-10">
      <div className="bg-primary-lite p-2">
        <Avatar
          url="https://imgur.com/aFFF1uw.jpg"
          shape="circular"
          className="h-28 w-28 self-center mx-auto my-2"
        />
        <h2 className="text-white text-center text-xl font-medium tracking-wider">
          <span>Utkarsh Gangwar</span>
        </h2>
        <h3 className="text-white text-xs text-opacity-20 text-center mb-2">
          <span>utkarshgangwar909@gmail.com</span>
        </h3>
      </div>
      <div className="mt-4">
        <ListElement
          title="Dashboard"
          path="/dashboard"
          icon={<AiOutlineHome className="text-white my-auto " />}
          className={
            "list-none hover:bg-primary-lite cursor-pointer border-b p-2 text-base text-white font-semibold text-center tracking-wider border-gray-600"
          }
        />
        <ListElement
          title="Statistics"
          path="/statics"
          icon={<IoIosStats className="text-white my-auto " />}
          className={
            "list-none hover:bg-primary-lite cursor-pointer border-b p-2 text-base text-white font-semibold text-center tracking-wider border-gray-600"
          }
        />
        <ListElement
          title="Courses"
          path="/course"
          icon={<FaFolder className="text-white my-auto " />}
          className={
            "list-none hover:bg-primary-lite cursor-pointer border-b p-2 text-base text-white font-semibold text-center tracking-wider border-gray-600"
          }
        />
        <li
          className="list-none border-b hover:bg-primary-lite p-2 text-2xl font-semibold text-center tracking-wider border-gray-600"
          onClick={() => {
            localStorage.removeItem("auth_token");
            window.location.href = "/";
          }}
        >
          <Link to="/dashboard" className="flex text-white text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-4 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span className="text-base">Logout</span>
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
