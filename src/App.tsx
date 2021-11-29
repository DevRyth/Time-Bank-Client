import "./App.css";
import React, { useEffect } from "react";
import SignUp from "./pages/SignUp.page";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { token, RG_TOKEN } from "./constants/constants";
import Navigation from "./components/Navigation";
import MainDisplay from "./pages/MainDisplay";
import Page404 from "./pages/Page404";
import LogIn from "./pages/LogIn.page";
import PersonalDetails from "./pages/PersonalDetails";
import Aboutus from "./components/aboutus/Aboutus";
import { store, useAppSelector } from "./Store/store";
import { meFetchUserAction } from "./actions/auth.action";
import { userData } from "./selectors/user.selector";
import { authErrorMessageSelector } from "./selectors/auth.selector";
import Button from "./sharedComponents/button/Button";
import { GiAbstract066 } from "react-icons/gi";

const App: React.FC = () => {
  useEffect(() => {
    if (token) store.dispatch(meFetchUserAction());
    else return;
  }, []); //eslint-disable-line

  const user = useAppSelector(userData);

  const registerToken = localStorage.getItem(RG_TOKEN);
  const errorMessage = useAppSelector(authErrorMessageSelector);

  if (!user && token) {
    return (
      <div className="w-screen h-screen">
        {errorMessage ? (
          <div className="flex flex-col text-center pt-10 pb-6">
            <span className="text-xl font-extrabold">{errorMessage}</span>
            <Button
              onClick={() => window.location.reload()}
              title="Reload"
              className="font-medium max-w-max mx-auto mt-6"
              theme="secondary"
            />
          </div>
        ) : (
          <div className="flex h-screen items-center">
            <GiAbstract066 className="mx-auto w-12 h-12 animate-spin" />
          </div>
        )}
      </div>
    );
  }

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
            {token && user ? (
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
            {token && user ? (
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
            {token && user && registerToken ? (
              <PersonalDetails />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route exact path="/about">
            {registerToken ? <Redirect to="/login" /> : <Aboutus />}
          </Route>
          <Route
            exact
            path={[
              "/dashboard",
              "/courses",
              "/courses/:id",
              "/register",
              "/course-register",
            ]}
          >
            {token && user ? (
              registerToken ? (
                <Redirect to="/register" />
              ) : (
                <MainDisplay />
              )
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route exact path="/register">
            <PersonalDetails />
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
