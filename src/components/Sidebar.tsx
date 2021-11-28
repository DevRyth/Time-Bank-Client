import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { FaFolder } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { logout } from "../apis/auth.api";
import { userData } from "../selectors/user.selector";
import Avatar from "../sharedComponents/Avatar";
import ListElement from "../sharedComponents/ListElement";
import { useAppSelector } from "../Store/store";

interface Props {}
const Sidebar: React.FC<Props> = () => {
  const user = useAppSelector(userData);
  const fullName =
    user?.user_info &&
    user.user_info?.first_name +
      " " +
      user?.user_info?.middle_name +
      " " +
      user.user_info?.last_name;

  return (
    <div className="hidden lg:block bg-primary-dark height lg:w-1/5 lg:fixed lg:z-10">
      <div className="bg-primary-lite p-2">
        <Avatar
          url="https://imgur.com/aFFF1uw.jpg"
          shape="circular"
          className="h-28 w-28 self-center mx-auto my-2"
        />
        <h2 className="text-white text-center text-xl font-medium tracking-wider">
          {fullName}
        </h2>
        <h3 className="text-white text-xs text-opacity-50 text-center mb-2">
          {user?.email}
        </h3>
      </div>
      <div className="mt-5">
        <ListElement
          title="Dashboard"
          path="/dashboard"
          icon={<AiOutlineHome className="text-white my-auto mr-2 " />}
          className={
            "list-none hover:bg-primary-lite cursor-pointer border-b p-3 text-base text-white font-semibold text-center tracking-wider border-gray-600"
          }
        />
        <ListElement
          title="Statistics"
          path="/statics"
          icon={<IoIosStats className="text-white my-auto mr-2 " />}
          className={
            "list-none hover:bg-primary-lite cursor-pointer border-b p-3 text-base text-white font-semibold text-center tracking-wider border-gray-600"
          }
        />
        <ListElement
          title="Courses"
          path="/courses"
          icon={<FaFolder className="text-white my-auto mr-2 " />}
          className={
            "list-none hover:bg-primary-lite cursor-pointer border-b p-3 text-base text-white font-semibold text-center tracking-wider border-gray-600"
          }
        />
        <ListElement
          onClick={() => logout()}
          title="Logout"
          icon={<BiLogOutCircle className="text-white my-auto mr-2 " />}
          className={
            "list-none hover:bg-primary-lite cursor-pointer border-b p-3 text-base text-white font-semibold text-center tracking-wider border-gray-600"
          }
        />
      </div>
    </div>
  );
};

export default Sidebar;
