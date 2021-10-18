import "./App.css";
import React from "react";
import Sidebar from "./components/Sidebar";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
        </Switch>
      </Router>
    </div>
  );
}

export default React.memo(App);
