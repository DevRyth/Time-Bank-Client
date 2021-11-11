import "./App.css";
import React from "react";
import Sidebar from "./components/Sidebar";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LogIn from "./pages/LogIn";
import CardTimeStatus from "./sharedComponents/cardTimeStatus/CardTimeStatus";

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
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/login">
            <LogIn />
          </Route>
          <Route exact path="/card">
            <CardTimeStatus
              name="ABCD"
              className="bg-primary-lite"
              num={24244}
            />
            <CardTimeStatus
              name="Estimated time"
              className="bg-secondary-lite"
              num={15455}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default React.memo(App);
