import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useHistory } from 'react-router-dom';
import CreatePost from "../CreatePostNav";
import { Modal } from '../../context/Modal';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
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

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/");
  };


  return (
    <>
      <button onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && (
        <div className="profile-dropdown">
          Hi, {user.username}
          <button onClick={logout}>Log Out</button>
        </div>
      )}
      { showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreatePost />
        </Modal>
      )}
    </>
  );
}

export default ProfileButton;
