import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch , Redirect } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import owlBackground from "./img/owl5.png";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);


  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);


  return (
    <>
      <div className="home-container">
        <Navigation isLoaded={isLoaded} />
        {isLoaded && (
          <Switch>
            <Route exact path="/">
              <img src={owlBackground} alt="owl" className="background-img"/>
            </Route>
            <Route path="/register">
              <img src={owlBackground} alt="owl" className="background-img"/>
              <SignupFormPage />
            </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          </Switch>
        )}
      </div>
    </>
  );
}

export default App;
