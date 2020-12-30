import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect , } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './Dashboard.css';
import displayPost from "./displayPost.js";

function Dashboard() {
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => console.log(sessionUser), []);

  if (!sessionUser) return <Redirect to="/" />;



  return (
    <div>
      {displayPost("text")}
      {displayPost("photo")}
      {displayPost("audio")}
      {displayPost("video")}
    </div>

)
}

export default Dashboard;
