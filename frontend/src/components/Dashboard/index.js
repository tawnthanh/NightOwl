import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect , } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './Dashboard.css';
import  owl  from "../../img/owl2.PNG";

function Dashboard() {
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => console.log(sessionUser), []);

  if (!sessionUser) return <Redirect to="/" />;

  const displayPost = (postType) => {
    if (postType === "text") {

      return (
        <div className="post-container text">
          <div className="picture-box"></div>
          <div className="posts">
            <h1>Title</h1>
            <p>Description</p>
          </div>
        </div>
      )
    };

    if (postType === "photo") {

      return (
        <div className="post-container ">
            <div className="picture-box"></div>
            <div className="posts photo">
              <h1>Photo</h1>
            <img src={owl} alt="owl" />
            <p> Description</p>
          </div>
        </div>
      )
    };

    if (postType === "audio") {
      let src = "https://open.spotify.com/episode/1Kf0fY64zzv9vTEzEWjs2a?si=w-ujZNxoT0q3c_WeR_esYw"
      if (src.includes("spotify")) {
        return (
          <div className="post-container ">
            <div className="picture-box"></div>
            <div className="posts audio">
              <h1>Audio</h1>
              <iframe src="https://open.spotify.com/embed-podcast/show/2DZwvzn6Z3xCFZrwZGDrbj" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              <p> Description</p>
            </div>
          </div>
        )

      }
    };
  };

  return (
    <div>
      {displayPost("text")}
      {displayPost("photo")}
      {displayPost("audio")}
      {displayPost("photo")}
      {displayPost("photo")}
    </div>

)
}

export default Dashboard;
