import React, { useState } from "react";
import Avatar from "../sharedComponents/Avatar";
import Button from "../sharedComponents/button/Button";
import ListElement from "../sharedComponents/ListElement";

interface Props {}
const Navigation: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const updateInitial = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="sm:hidden w-screen">
        <header className="bg-primary-dark ">
          <nav className="flex justify-between">
            <div className="flex items-center">
              <ListElement
                title="Home"
                path="/dashboard"
                className={
                  "text-white cursor-pointer ml-1 p-2 rounded-lg hover:bg-primary-lite "
                }
              />
              <ListElement
                title="About"
                path="/about"
                className={
                  "text-white cursor-pointer p-2 rounded-lg hover:bg-primary-lite "
                }
              />
            </div>
            <div className=" flex justify-end mr-2 py-1">
              <div onClick={updateInitial}>
                <Avatar
                  shape="circular"
                  url="https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk="
                />
              </div>
            </div>
          </nav>
        </header>

        <div
          className={`w-1/2  text-5xl font-extrabold bg-background-lite right-0 absolute ${
            !isOpen && "hidden"
          }`}
        >
          <ListElement
            title="Profile"
            path="/profile"
            className={
              "flex justify-center  border-b py-1 text-sm font-semibold  tracking-wider border-gray-600"
            }
          />
          <ListElement
            title="Dashboard"
            path="/dashboard"
            className={
              "flex justify-center  border-b py-1 text-sm font-semibold  tracking-wider border-gray-600"
            }
          />
          <ListElement
            title="Statistics"
            path="/statistics"
            className={
              "flex justify-center  border-b py-1 text-sm font-semibold  tracking-wider border-gray-600"
            }
          />
          <ListElement
            title="Courses"
            path="/courses"
            className={
              "flex justify-center  border-b py-1 text-sm font-semibold  tracking-wider border-gray-600"
            }
          />
          <ListElement
            title="Logout"
            className={
              "flex justify-center  border-b py-1 text-sm font-semibold  tracking-wider border-gray-600"
            }
          />
        </div>
      </div>
      <div className="hidden sm:block">
        <header className="bg-primary-dark ">
          <nav className="py-3 px-6">
            <div className=" mr-2 flex justify-between">
              <div className="flex items-center">
                <ListElement
                  title="Home"
                  path="/dashboard"
                  className={
                    "list-none cursor-pointer ml-2 px-2 p-2 rounded-lg hover:bg-primary-lite text-white"
                  }
                />
                <ListElement
                  title="About"
                  path="/about"
                  className={
                    "list-none cursor-pointer ml-2 px-2 p-2 rounded-lg hover:bg-primary-lite text-white"
                  }
                />
                <ListElement
                  title="Course"
                  path="/course"
                  className={
                    "list-none cursor-pointer ml-2 px-2 p-2 rounded-lg hover:bg-primary-lite text-white"
                  }
                />
              </div>
              {!localStorage.getItem("auth_token") && (
                <div className="flex items-center">
                  <Button
                    title="Login"
                    type="submit"
                    theme="secondary"
                    className={"py-0.5 mr-2"}
                  />
                  <Button
                    title="Signup"
                    type="submit"
                    theme="secondary"
                    className={"py-0.5 "}
                  />
                </div>
              )}
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};
export default Navigation;
