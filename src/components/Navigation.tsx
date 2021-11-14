import React from "react";
import { HiOutlineUser, CgPassword } from "react-icons/all";
import Button from "../sharedComponents/button/Button";
import Input from "../sharedComponents/input/Input";
interface Props {}
const Navigation: React.FC<Props> = () => {
  return (
    <div>
      <header>
        <nav className="bg-primary-dark flex">
          <li className="list-none">Home</li>
          <li className="list-none">About</li>
          <li className="list-none">Courses</li>
          <Input
            type="text"
            name="Username"
            placeholder="Username"
            iconColor="text-primary-dark"
            className="text-primary-dark"
          >
            <HiOutlineUser />
          </Input>
          <Input
            type="password"
            name="Password"
            placeholder="Password"
            className="text-primary-dark"
            iconColor="text-primary-dark"
          >
            <CgPassword />
          </Input>
          <Button title={"Login"} className="py-0" />
        </nav>
      </header>
    </div>
  );
};
export default Navigation;
