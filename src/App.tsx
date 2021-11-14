import "./App.css";
import React from "react";
import Sidebar from "./components/Sidebar";
import SignUp from "./pages/SignUp";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import LogIn from "./pages/LogIn";
import CourseRegister from "./pages/CourseRegister.page";

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
          <Route exact path="/courseregister">
            <CourseRegister></CourseRegister>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default React.memo(App);
