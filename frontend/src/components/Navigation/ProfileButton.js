import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useHistory } from 'react-router-dom';
import CreatePostNav from "../CreatePostNav";
import { Modal } from '../../context/Modal';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  const openProfile = () => {
    if (showMenu) return;
    setShowProfile(true);
  };

  const openNewPost = () => {
    setShowModal(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  useEffect(() => {
    if (!showProfile) return;

    const closeProfile = () => {
      setShowProfile(false);
    };

    document.addEventListener('click', closeProfile);

    return () => document.removeEventListener("click", closeProfile);
  }, [showProfile]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/");
  };


  return (
    <>
    {showProfile && (
      <div className="profile-dropdown">
        <div className="greeting">Hi, {user.username}</div>
        <button onClick={logout}>Log Out</button>
      </div>
    )}
    { showMenu && (
      <div className="menu-dropdown">
        <button onClick={openNewPost}>New Post</button>
          <button onClick={() => history.push(`/${user.username}/likes`)}> View Likes </button>
          <button onClick={() => history.push(`/${user.username}/posts`)}> View Posts </button>
      </div>
    )

    }
    { showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <CreatePostNav />
      </Modal>
    )}
      <button onClick={openProfile}>
        <i className="fas fa-user-circle" />
      </button>
      <button onClick={openMenu}>
        <i className="fas fa-align-justify"></i>
      </button>
    </>
  );
}

export default ProfileButton;
