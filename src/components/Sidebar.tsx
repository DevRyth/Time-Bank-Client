import React from "react";
import Avatar from "../sharedComponents/Avatar";
import Navigation from "./Navigation";

interface Props {
  name: string;
  email: string;
  image: string;
}
const Sidebar: React.FC<Props> = ({ name, email, image }) => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div className="hidden sm:block w-max h-screen bg-primary-dark">
        <div className="bg-primary-lite p-2">
          {/* <img
            className="rounded-full w-1/2 self-center mx-auto my-2"
            src={image}
            alt="avatar"
          /> */}
          <Avatar
            url={image}
            shape="circular"
            className="h-28 w-28 self-center mx-auto my-2"
          />
          <h2 className="text-white text-center text-xl font-medium tracking-wider">
            {name}
          </h2>
          <h3 className="text-white text-xs text-opacity-20 text-center mb-2">
            {email}
          </h3>
        </div>
        <div className="mt-4">
          <li className="flex list-none border-b-2 p-2 text-2xl font-semibold text-center tracking-wider border-gray-600">
            <a href="https://www.google.com/" className="flex text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white my-auto mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="text-base">Dashboard</span>
            </a>
          </li>
          <li className="list-none border-b-2 p-2 text-2xl font-semibold text-center tracking-wider border-gray-600">
            <a
              href="https://www.google.com/"
              className="flex text-white text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-4 my-auto"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              <span className="text-base">Statistics</span>
            </a>
          </li>
          <li className="list-none border-b-2 p-2 text-2xl font-semibold text-center tracking-wider border-gray-600">
            <a
              href="https://www.google.com/"
              className="flex text-white text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-4 my-auto"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
              </svg>
              <span className="text-base">Courses</span>
            </a>
          </li>
          <li className="list-none border-b-2  p-2 text-2xl font-semibold text-center tracking-wider border-gray-600">
            <a
              href="https://www.google.com/"
              className="flex text-white text-lg"
            >
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
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
