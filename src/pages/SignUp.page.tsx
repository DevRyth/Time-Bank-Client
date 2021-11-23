import React, { useState } from "react";
// import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Input from "../sharedComponents/input/Input";
import { HiOutlineUser, MdEmail, CgPassword } from "react-icons/all";
import Button from "../sharedComponents/button/Button";
import SwitchButton from "../sharedComponents/switchButton/SwitchButton";
import { Formik } from "formik";
import * as Yup from "yup";
// import PersonalDetails from "./PersonalDetails";
import { store, useAppSelector } from "../Store/store";
import { registerSendData } from "../actions/register.action";
import { registerError, registerLoading } from "../selectors/register.selector";
import Alert from "../sharedComponents/Alert/Alert";

const SignUp: React.FC = () => {
  // const history = useHistory();
  // const [showRegisterPage, setShowRegisterPage] = useState(false);
  const isSignupLoading = useAppSelector(registerLoading);
  const errorMessage = useAppSelector(registerError);

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, ({ min }) => `Username must be atleast ${min} chars`)
      .required("Username is required field!"),
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
          onSubmit={async (values) => {
            const mappedValues = {
              username: values.username,
              email: values.email,
              password: values.password,
            };
            if (values.confirmPassword === values.password) {
              store.dispatch(registerSendData(mappedValues));
            } else {
              console.log("Password entered is not matching!");
            }
          }}
        >
          {({ handleChange, handleSubmit, errors, touched }) => (
            <form
              onSubmit={handleSubmit}
              className="pt-6 space-y-10 md:space-y-10 md:pt-10"
            >
              {errorMessage && (
                <Alert
                  className="rounded-3xl absolute inset-x-0 mx-auto max-w-max text-xs pt-2 pb-2 pl-4 pr-4 md:text-base md:px-6 md:py-2"
                  containsIcon={false}
                >
                  {errorMessage}
                </Alert>
              )}
              <Input
                onChange={handleChange}
                iconColor="text-primary-dark"
                className="text-primary-dark"
                type="text"
                name="username"
                placeholder="Username"
                touched={touched.username}
                errorMessage={errors.username}
                outerClassName="mx-auto max-w-max pt-4 md:pt-6"
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
                outerClassName="mx-auto max-w-max"
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
                outerClassName="mx-auto max-w-max"
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
                outerClassName="mx-auto max-w-max"
              >
                <CgPassword />
              </Input>
              <SwitchButton
                defaultChecked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="pt-3"
                text="Show Password"
              />
              <div>
                <Button
                  isSubmitting={isSignupLoading}
                  type="submit"
                  title="Sign Up"
                  theme="primary"
                />
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
