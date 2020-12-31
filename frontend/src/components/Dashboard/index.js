import React, { useEffect } from "react";
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
  }, [dispatch]);

  if (!sessionUser) return <Redirect to="/" />;


  return (
    <div>
      <div className="spacer"></div>
      { posts.map(post => {
        return displayPost(post)
      })}
    </div>

)
}

export default Dashboard;
