import React, { useState } from "react";
import Avatar from "../sharedComponents/Avatar";
import Button from "../sharedComponents/button/Button";

interface Props {}
const Navigation: React.FC<Props> = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const update = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <div>
      <div className="sm:hidden min-w-full text-sm">
        <header className="bg-on-secondary ">
          <nav className="">
            <div className=" flex justify-end mr-2 py-1">
              <a href="#">
                <Avatar
                  shape="rounded"
                  URL="https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk="
                />
              </a>
            </div>
          </nav>
        </header>
      </div>
      <div className="hidden sm:block">
        <header className="bg-on-secondary ">
          <nav className="py-2">
            <div className=" mr-2 flex justify-between">
              <div className=" flex items-center">
                <li className="list-none px-2 ">
                  <a className="text-white" href="#">
                    Home
                  </a>
                </li>
                <li className="list-none px-2 ">
                  <a className="text-white" href="#">
                    About
                  </a>
                </li>
                <li className="list-none px-2 ">
                  <a className="text-white" href="#">
                    Courses
                  </a>
                </li>
              </div>
              <div className="flex items-center">
                <Button
                  title="Login"
                  type="submit"
                  theme="secondary"
                  className={"py-0.5 mr-2"}
                  onClick={update}
                />
                <Button
                  title="Signup"
                  type="submit"
                  theme="secondary"
                  className={"py-0.5 "}
                  onClick={update}
                />
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};
export default Navigation;
