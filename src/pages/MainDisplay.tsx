import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Sidebar from "../components/Sidebar";
import CourseDetailPage from "./CourseDetail.page";
import CourseRegistrationPage from "./CourseRegistration.page";
import CoursesPage from "./Courses.page";

const MainDisplay = () => {
  return (
    <div className="lg:flex">
      <Sidebar />
      <div className="w-1/5 lg:block hidden"></div>
      <div className="mx-auto lg:w-4/5 min-h-screen">
        <Switch>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/courses/:id">
            <CourseDetailPage />
          </Route>
          <Route exact path="/courses">
            <CoursesPage />
          </Route>
          <Route exact path="/course-register">
            <CourseRegistrationPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default React.memo(MainDisplay);
