import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Sidebar from "../components/Sidebar";
import CourseDetailPage from "./CourseDetail.page";
import CourseRegistrationPage from "./CourseRegistration.page";
import CoursesPage from "./Courses.page";
import PersonalDetails from "./PersonalDetails";

const MainDisplay = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="height md:w-72"></div>
      <div className="w-full">
        <Switch>
          <Route exact path="/courses/1">
            <CourseDetailPage />
          </Route>
          <Route exact path="/courses">
            <CoursesPage />
          </Route>
          <Route exact path="/register">
            <PersonalDetails />
          </Route>
          <Route exact path="/course-register">
            <CourseRegistrationPage />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default React.memo(MainDisplay);
