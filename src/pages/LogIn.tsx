import React from "react";
import { Link } from "react-router-dom";
import Input from "../sharedComponents/input/Input";
import { HiOutlineUser,  CgPassword } from "react-icons/all";
import Button from "../sharedComponents/button/Button";

const LogIn: React.FC = () => {
  return (
    <div className="bg-background-lite p-10 h-screen w-screen">
      <div className="text-center min-h-full p-10 bg-on-primary-lite">
        <h1 className="text-center text-xl md:text-3xl font-bold">
        Welcome
        </h1>
        <p className="tracking-wider md:text-sm pt-4 text-xs">
          Did'nt have an account?{" "}
          <Link className="text-secondary-dark underline" to="/signup">
            Create One
          </Link>
        </p>
        <div className="pt-6 space-y-3 md:space-y-6 md:pt-10">
          <Input
            iconColor="text-primary-dark"
            className="text-primary-dark"
            type="username"
            name="text"
            placeholder="Username or Email"
          >
            <HiOutlineUser />
          </Input>
        
          <Input
            iconColor="text-primary-dark"
            className="text-primary-dark"
            type="password"
            name="password"
            placeholder="Password"
          >
            <CgPassword />
          </Input>
    
          <div className="pt-5">
            <Button title="Log In" theme="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(LogIn);