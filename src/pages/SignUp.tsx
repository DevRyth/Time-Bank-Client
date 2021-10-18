import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../sharedComponents/input/Input";
import { HiOutlineUser, MdEmail, CgPassword } from "react-icons/all";
import Button from "../sharedComponents/button/Button";
import SwitchButton from "../sharedComponents/switchButton/SwitchButton";
import { Formik } from "formik";

const SignUp: React.FC = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="bg-background-lite p-10 h-screen w-screen">
      <div className="text-center min-h-full p-10 bg-on-primary-lite">
        <h1 className="text-center text-xl md:text-3xl font-bold">
          Get Started
        </h1>
        <p className="tracking-wider md:text-sm pt-4 text-xs">
          Already have an account?{" "}
          <Link to="/dashboard" className="text-secondary-dark underline">
            Log in
          </Link>
        </p>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values, helper) => {
            const mappedValues = {
              username: values.username,
              email: values.email,
              password: values.password,
            };
            console.log("Mapped Values", mappedValues);
          }}
        >
          {(formikProps) => (
            <form
              onSubmit={formikProps.handleSubmit}
              className="pt-6 space-y-3 md:space-y-6 md:pt-10"
            >
              <Input
                onChange={formikProps.handleChange}
                onBlur={formikProps.handleBlur}
                value={formikProps.values.username}
                iconColor="text-primary-dark"
                className="text-primary-dark"
                type="username"
                name="text"
                placeholder="Username"
              >
                <HiOutlineUser />
              </Input>
              <Input
                onChange={formikProps.handleChange}
                onBlur={formikProps.handleBlur}
                value={formikProps.values.email}
                iconColor="text-primary-dark"
                className="text-primary-dark"
                type="email"
                name="email"
                placeholder="Email"
              >
                <MdEmail />
              </Input>
              <Input
                onChange={formikProps.handleChange}
                onBlur={formikProps.handleBlur}
                value={formikProps.values.password}
                iconColor="text-primary-dark"
                className="text-primary-dark"
                type="password"
                name="password"
                placeholder="Password"
              >
                <CgPassword />
              </Input>
              <Input
                onChange={formikProps.handleChange}
                onBlur={formikProps.handleBlur}
                value={formikProps.values.confirmPassword}
                iconColor="text-primary-dark"
                className="text-primary-dark"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
              >
                <CgPassword />
              </Input>
              <SwitchButton
                defaultChecked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="pt-3"
                text="Show Password"
              />
              <div className="pt-3">
                <Button title="Sign Up" theme="primary" />
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default React.memo(SignUp);
