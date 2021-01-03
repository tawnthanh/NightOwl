import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import owlBackground from "./img/owl5.png";
import CreatePost from "./components/CreatePost"
import LikesDisplay from "./components/LikesDisplay";

function App() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user)
  const [isLoaded, setIsLoaded] = useState(false);


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
              <img src={owlBackground} alt="owl" className="background-img" />
              {sessionUser && (
                <Redirect to="/dashboard" />
              )}
            </Route>
            <Route path="/register">
              <img src={owlBackground} alt="owl" className="background-img"/>
              <SignupFormPage />
            </Route>
          <Route path="/dashboard">
            <Dashboard />
            </Route>
            <Route path="/create-post/text">
              <CreatePost />
            </Route>
            <Route path="/create-post/photo">
              <CreatePost />
            </Route>
            <Route path="/create-post/audio">
              <CreatePost />
            </Route>
            <Route path="/create-post/video">
              <CreatePost />
            </Route>
            <Route path={`/${sessionUser.username}/likes`} >
              <LikesDisplay />
            </Route>
          </Switch>
        )}
      </div>
    </>
  );
}

export default App;
