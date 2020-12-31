import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect , } from "react-router-dom";
import './Dashboard.css';
import displayPost from "./displayPost.js";
import { displayAllPosts } from '../../store/dashboard'

function Dashboard() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(displayAllPosts());
    console.log(posts);
  }, []);

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
