import React from "react";
import { Link } from "react-router-dom";
import Input from "../sharedComponents/input/Input";
import { HiOutlineUser, CgPassword } from "react-icons/all";
import Button from "../sharedComponents/button/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import Alert from "../sharedComponents/Alert/Alert";
import { store, useAppSelector } from "../Store/store";
import { meSendingData } from "../actions/auth.action";
import {
  authErrorMessageSelector,
  authLoadingSelector,
} from "../selectors/auth.selector";

const LogIn: React.FC = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email")
      .required("Email is the required field!"),
    password: Yup.string()
      .min(6, ({ min }) => `Password must be atleast ${min} chars`)
      .required("Password is the required field!"),
  });

  const loginLoading = useAppSelector(authLoadingSelector);
  const loginError = useAppSelector(authErrorMessageSelector);
  console.log("Loading Error status: ", loginLoading);

  return (
    <div className="bg-background-lite p-10 h-screen min-w-screen">
      <div className="text-center min-h-full p-10 bg-on-primary-lite">
        <h1 className="text-center text-xl md:text-3xl font-bold">Welcome</h1>
        <p className="tracking-wider md:text-sm pt-4 text-xs">
          Didn't have an account?{" "}
          <Link className="text-secondary-dark underline" to="/signup">
            Create One
          </Link>
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, helper) => {
            helper.setSubmitting(true);
            const mappedValues = {
              email: values.email,
              password: values.password,
            };
            // const url = BASE_URL + "/login";
            // try {
            //   const response: any = await axios.post(url, mappedValues);
            //   localStorage.setItem(LS_AUTH_TOKEN, response.data.token);
            //   helper.setSubmitting(false);
            //   window.location.href = "/dashboard";
            // } catch (error) {
            //   setIsFormSuccess(false);
            // }
            store.dispatch(meSendingData(mappedValues));
          }}
        >
          {({ touched, errors, handleChange, handleSubmit }) => (
            <form
              onSubmit={handleSubmit}
              className="pt-6 space-y-3 md:space-y-6 md:pt-10 relative"
            >
              {loginError && (
                <Alert
                  className="rounded-3xl absolute inset-x-0 mx-auto max-w-max text-xs pt-2 pb-2 pl-4 pr-4 md:text-base md:px-6 md:py-2"
                  containsIcon={false}
                >
                  {loginError}
                </Alert>
              )}
              <div className="pt-10 space-y-8 md:space-y-10 md:pt-10">
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
                  <HiOutlineUser />
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

                <div className="pt-6">
                  <Button
                    type="submit"
                    title="Log In"
                    isSubmitting={loginLoading}
                    theme="primary"
                  />
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default React.memo(LogIn);
