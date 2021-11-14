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
import Page404 from "./sharedComponents/page404/Page404";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/dashboard">
            <Sidebar
              name="Utkarsh Gangwar"
              email="utkarshgangwar909@gmail.com"
              image="https://imgur.com/aFFF1uw.jpg"
            />
          </Route>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/login">
            <LogIn />
          </Route>
          <Route exact path="/courses">
            <CoursesPage />
          </Route>
          <Route exact path="/courses/1">
            <CourseDetailPage />
          </Route>
          <Route exact path="/page-404">
            <Page404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default React.memo(App);
