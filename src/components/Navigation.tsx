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
      <div className="sm:hidden min-w-full">
        <header className="bg-on-secondary ">
          <nav className="flex justify-between">
            <div className="flex items-center">
              <li className="list-none px-2">
                <a className="text-white" href="https://www.google.com/">
                  Home
                </a>
              </li>
              <li className="list-none px-2 ">
                <a className="text-white" href="https://www.google.com/">
                  About
                </a>
              </li>
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
          <ListElement title="Profile" path="/profile" />
          <ListElement title="Dashboard" path="/dashboard" />
          <ListElement title="Statistics" path="/statistics" />
          <ListElement title="Courses" path="/courses" />
          <ListElement title="Logout" />
        </div>
      </div>
      <div className="hidden sm:block">
        <header className="bg-on-secondary ">
          <nav className="py-3">
            <div className=" mr-2 flex justify-between">
              <div className="flex items-center">
                <li className="list-none cursor-pointer ml-2 px-2 p-2 rounded-lg hover:bg-primary-dark">
                  <a className="text-white" href="https://www.google.com/">
                    Home
                  </a>
                </li>
                <li className="list-none px-2 cursor-pointer hover:bg-primary-dark p-2 rounded-lg">
                  <a className="text-white" href="https://www.google.com/">
                    About
                  </a>
                </li>
                <li className="list-none px-2 hover:bg-primary-dark cursor-pointer p-2 rounded-lg">
                  <a className="text-white" href="https://www.google.com/">
                    Courses
                  </a>
                </li>
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
