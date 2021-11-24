import "./App.css";
import React from "react";
import SignUp from "./pages/SignUp.page";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { LS_AUTH_TOKEN, RG_TOKEN } from "./constants/constants";
import { axiosRequest, axiosResponse } from "./axios/axios";
import Navigation from "./components/Navigation";
import MainDisplay from "./pages/MainDisplay";
import Page404 from "./pages/Page404";
import LogIn from "./pages/LogIn.page";
import PersonalDetails from "./pages/PersonalDetails";

const App: React.FC = () => {
  axiosRequest();
  axiosResponse();

  const token = localStorage.getItem(LS_AUTH_TOKEN);
  const registerToken = localStorage.getItem(RG_TOKEN);

  return (
    <div>
      <Router>
        <div className="sticky top-0 z-10">
          <Navigation />
        </div>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/signup">
            {token ? (
              registerToken ? (
                <Redirect to="/register" />
              ) : (
                <Redirect to="/dashboard" />
              )
            ) : (
              <SignUp />
            )}
          </Route>
          <Route exact path="/login">
            {token ? (
              registerToken ? (
                <Redirect to="/register" />
              ) : (
                <Redirect to="/dashboard" />
              )
            ) : (
              <LogIn />
            )}
          </Route>
          <Route exact path="/register">
            {token && registerToken ? (
              <PersonalDetails />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route
            exact
            path={[
              "/dashboard",
              "/courses",
              "/courses/1",
              "/register",
              "/course-register",
            ]}
          >
            {token ? (
              registerToken ? (
                <Redirect to="/register" />
              ) : (
                <MainDisplay />
              )
            ) : (
              <Redirect to="/login" />
            )}
          </Route>

          <Route path="/">
            <Page404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default React.memo(App);
