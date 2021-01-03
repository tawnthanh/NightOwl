import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect , } from "react-router-dom";
import './Dashboard.css';
import displayPost from "./displayPost.js";
import { displayAllPosts } from '../../store/dashboard'

function Dashboard() {
  const sessionUser = useSelector((state) => state.session.user);
  const posts = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(displayAllPosts());
    }, 500)
  }, [dispatch]);

  if (!sessionUser) return <Redirect to="/" />;


  return (
    <div>
      <div className="spacer"></div>
      { posts.map((post, idx) => {
        return displayPost(post, idx)
      })}
    </div>

)
}

export default Dashboard;
