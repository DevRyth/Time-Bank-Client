import React from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import CourseDetailPage from "./CourseDetail.page";
import CourseRegistrationPage from "./CourseRegistration.page";
import CoursesPage from "./Courses.page";

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
          <Route exact path="/course-register">
            <CourseRegistrationPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default React.memo(MainDisplay);
