import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import owlBackground from "./img/owl2.PNG";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <div className="home-container">
        <img src={owlBackground} alt="owl" className="background-img"/>
        <Navigation isLoaded={isLoaded} />
        {isLoaded && (
          <Switch>
            <Route path="/register">
              <SignupFormPage />
            </Route>
          </Switch>
        )}
        <div className="title"><h1>NIGHT OWL</h1></div>
      </div>
      <div className="dashboard-container">
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      </div>
    </>
  );
}

export default App;
