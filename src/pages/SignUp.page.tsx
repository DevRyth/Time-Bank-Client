import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Input from "../sharedComponents/input/Input";
import { HiOutlineUser, MdEmail, CgPassword } from "react-icons/all";
import Button from "../sharedComponents/button/Button";
import SwitchButton from "../sharedComponents/switchButton/SwitchButton";
import { Formik, FormikProps, FormikValues } from "formik";
import axios from "axios";
import PersonalDetails from "./PersonalDetails";

const SignUp: React.FC = () => {

  const history = useHistory();
  const [showRegisterPage, setShowRegisterPage] = useState(false);

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="bg-background-lite p-10 h-screen w-screen flex justify-center">
      <div className="text-center min-h-full p-10 bg-on-primary-lite">
        <h1 className="text-center text-xl md:text-3xl font-bold">
          Get Started
        </h1>
        <p className="tracking-wider md:text-sm pt-4 text-xs">
          Already have an account?{" "}
          <Link className="text-secondary-dark underline" to="/login">
            Log in
          </Link>
        </p>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values, helper) => {
            helper.setSubmitting(true);
            const mappedValues = {
              username: values.username,
              email: values.email,
              password: values.password,
            };
            if (values.confirmPassword === values.password) {
              // const url = "https://fierce-shore-21287.herokuapp.com/signup";
              const url = "http://localhost:4000/signup";
              // const response: any = await axios.post(url, mappedValues);
              // if (response.status === 200) {
              //   localStorage.setItem('token', response.data.token);
              //   history.push('/register');
              // }
              setShowRegisterPage(true);
              console.log(mappedValues);
            } else {
              console.log("Password entered is not matching!");
            }
            helper.setSubmitting(false);
          }}
        >
          {(formikProps: FormikProps<FormikValues>) => (
            <form
              onSubmit={formikProps.handleSubmit}
              className="pt-6 space-y-3 md:space-y-6 md:pt-10"
            >
              <Input
                onChange={formikProps.handleChange}
                iconColor="text-primary-dark"
                className="text-primary-dark"
                type="text"
                name="username"
                placeholder="Username"
              >
                <HiOutlineUser />
              </Input>
              <Input
                onChange={formikProps.handleChange}
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
                iconColor="text-primary-dark"
                className="text-primary-dark"
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
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
                <Button type="submit" title="Sign Up" theme="primary" />
              </div>
            </form>
          )}
        </Formik>
      </div>
      {(showRegisterPage) ? <PersonalDetails className="absolute top-0 bg-red-400"/> : null}
    </div>
  );
};

export default React.memo(SignUp);
