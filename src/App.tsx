import "./App.css";
import React from "react";
import Sidebar from "./components/Sidebar";
import SignUp from "./pages/SignUp.page";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import LogIn from "./pages/LogIn.page";
import CoursesPage from "./pages/Courses.page";
import CourseDetailPage from "./pages/CourseDetail.page";
import Page404 from "./pages/Page404";
import { LS_AUTH_TOKEN } from "./constants/constants";
import { axiosRequest, axiosResponse } from "./axios/axios";
import PersonalDetails from "./pages/PersonalDetails";
import Footer from "./sharedComponents/footer/Footer";

const App: React.FC = () => {
  axiosRequest();
  axiosResponse();

  const token = localStorage.getItem(LS_AUTH_TOKEN);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/dashboard">
            {token ? (
              <Sidebar
                name="Utkarsh Gangwar"
                email="utkarshgangwar909@gmail.com"
                image="https://imgur.com/aFFF1uw.jpg"
              />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/signup">
            {token ? <Redirect to="/dashboard" /> : <SignUp />}
          </Route>
          <Route exact path="/login">
            {token ? <Redirect to="/dashboard" /> : <LogIn />}
          </Route>
          <Route exact path="/courses">
            {token ? <CoursesPage /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/courses/1">
            {token ? <CourseDetailPage /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/footer">
            <Footer />
          </Route>
          <Route exact path="/register">
            <PersonalDetails></PersonalDetails>
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
