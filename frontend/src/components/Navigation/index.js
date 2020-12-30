import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className="logged-in-nav">
        <NavLink className="nav night-owl-logo" exact to="/dashboard">NIGHT OWL</NavLink>
        <div className="profile-button">
          <ProfileButton user={sessionUser} />
        </div>
      </div>
    );
  } else {
    sessionLinks = (
      <div className="logged-out-nav">
        <div>
          <NavLink className="nav" exact to="/">Home</NavLink>
        </div>
        <div>
          <LoginFormModal />
        </div>
        <div>
          <NavLink className="nav" to="/register">Register</NavLink>
        </div>
      </div>
    );
  }

  return (
    <>
      {isLoaded && sessionLinks}
    </>
  );
}

export default Navigation;
