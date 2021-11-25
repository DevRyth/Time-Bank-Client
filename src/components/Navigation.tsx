import React, { useState } from "react";
import { useHistory } from "react-router";
import { logout } from "../apis/auth.api";
import { RG_TOKEN } from "../constants/constants";
import Avatar from "../sharedComponents/Avatar";
import Button from "../sharedComponents/button/Button";
import ListElement from "../sharedComponents/ListElement";

interface Props {}
const Navigation: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  return (
    <div>
      {isOpen && (
        <div>
          <div
            className={`text-5xl w-40 md:w-60 font-extrabold bg-primary-lite p-4 text-white right-0 top-12 absolute`}
          >
            <ListElement
              onClick={() => setIsOpen(false)}
              title="Dashboard"
              path="/dashboard"
              className={
                "flex justify-center  border-b text-sm font-semibold hover:bg-primary-dark tracking-wider border-secondary-lite p-1"
              }
            />
            <ListElement
              onClick={() => setIsOpen(false)}
              title="Courses"
              path="/courses"
              className={
                "flex justify-center border-b text-sm font-semibold  tracking-wider border-secondary-lite p-1 hover:bg-primary-dark"
              }
            />

            <ListElement
              onClick={() => setIsOpen(false)}
              title="Course Register"
              path="/course-register"
              className={
                "flex justify-center border-b text-sm font-semibold  tracking-wider border-secondary-lite p-1 hover:bg-primary-dark"
              }
            />

            {!localStorage.getItem(RG_TOKEN) && (
              <ListElement
                title="Logout"
                onClick={() => logout()}
                className={
                  "flex justify-center text-sm font-semibold tracking-wider p-1 hover:bg-primary-dark"
                }
              />
            )}
          </div>
        </div>
      )}
      <div>
        <div className="bg-on-secondary px-6">
          <nav className="py-0.5">
            <div className="flex justify-between">
              <div className="flex items-center">
                <ListElement
                  title="Home"
                  path="/dashboard"
                  className={
                    "list-none cursor-pointer text-center ml-2 px-2 p-2 rounded-lg hover:bg-primary-lite text-white"
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
                  path="/courses"
                  className={
                    "list-none hidden md:block cursor-pointer ml-2 px-2 p-2 rounded-lg hover:bg-primary-lite text-white"
                  }
                />
              </div>
              {!localStorage.getItem("auth_token") ? (
                <div className="flex flex-col py-3 md:py-0 md:flex-row items-center md:space-y-0 space-y-1">
                  <Button
                    onClick={() => history.push("/login")}
                    title="Login"
                    type="submit"
                    theme="secondary"
                    className={"py-0.5 md:mr-2"}
                  />
                  <Button
                    onClick={() => history.push("/signup")}
                    title="Signup"
                    type="submit"
                    theme="secondary"
                    className={"py-0.5 "}
                  />
                </div>
              ) : (
                <div className="flex justify-end mr-2 py-1">
                  <Avatar
                    className="cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                    shape="circular"
                    url="https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk="
                  />
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default React.memo(Navigation);
