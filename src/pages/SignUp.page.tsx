import React, { useState } from "react";
// import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Input from "../sharedComponents/input/Input";
import { HiOutlineUser, MdEmail, CgPassword } from "react-icons/all";
import Button from "../sharedComponents/button/Button";
import SwitchButton from "../sharedComponents/switchButton/SwitchButton";
import { Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";
// import PersonalDetails from "./PersonalDetails";
import { BASE_URL, LS_AUTH_TOKEN } from "../constants/constants";

const SignUp: React.FC = () => {
  // const history = useHistory();
  // const [showRegisterPage, setShowRegisterPage] = useState(false);

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().min(
      6,
      ({ min }) => `Username must be atleast ${min} chars`
    ),
    email: Yup.string()
      .email("Invalid Email")
      .required("Email is the required field!"),
    password: Yup.string()
      .min(6, ({ min }) => `Password must be atleast ${min} chars`)
      .required("Password is the required field!"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Password must match"
    ),
  });
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="bg-background-lite p-10 min-h-screen">
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
          validationSchema={validationSchema}
          onSubmit={async (values, helper) => {
            helper.setSubmitting(true);
            const mappedValues = {
              username: values.username,
              email: values.email,
              password: values.password,
            };
            if (values.confirmPassword === values.password) {
              const url = BASE_URL + "/signup";
              const response: any = await axios.post(url, mappedValues);
              if (response.status === 200) {
                localStorage.setItem(LS_AUTH_TOKEN, response.data.token);
                window.location.href = "/register";
                // setShowRegisterPage(true);
              }
              console.log(mappedValues);
            } else {
              console.log("Password entered is not matching!");
            }
            helper.setSubmitting(false);
          }}
        >
          {({ handleChange, handleSubmit, errors, touched }) => (
            <form
              onSubmit={handleSubmit}
              className="pt-6 space-y-3 md:space-y-10 md:pt-10"
            >
              <Input
                onChange={handleChange}
                iconColor="text-primary-dark"
                className="text-primary-dark"
                type="text"
                name="username"
                placeholder="Username"
                touched={touched.username}
                errorMessage={errors.username}
              >
                <HiOutlineUser />
              </Input>
              <Input
                onChange={handleChange}
                iconColor="text-primary-dark"
                className="text-primary-dark"
                type="email"
                name="email"
                placeholder="Email"
                touched={touched.email}
                errorMessage={errors.email}
              >
                <MdEmail />
              </Input>
              <Input
                onChange={handleChange}
                iconColor="text-primary-dark"
                className="text-primary-dark"
                type="password"
                name="password"
                placeholder="Password"
                touched={touched.password}
                errorMessage={errors.password}
              >
                <CgPassword />
              </Input>
              <Input
                onChange={handleChange}
                iconColor="text-primary-dark"
                className="text-primary-dark"
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                touched={touched.confirmPassword}
                errorMessage={errors.confirmPassword}
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
      {/* {(showRegisterPage || localStorage.getItem(LS_AUTH_TOKEN)) ? <PersonalDetails className="absolute top-0 bg-secondary-dark"/> : null} */}
    </div>
  );
};

export default React.memo(SignUp);
