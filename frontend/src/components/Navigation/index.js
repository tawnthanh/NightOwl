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
      <div>
      <NavLink className="nav" exact to="/dashboard">Home</NavLink>
      <ProfileButton user={sessionUser} />
    </div>
    );
  } else {
    sessionLinks = (
      <>
        <div>
          <NavLink className="nav" exact to="/">Home</NavLink>
        </div>
        <div>
          <LoginFormModal />
        </div>
        <div>
          <NavLink className="nav" to="/register">Register</NavLink>
        </div>
      </>
    );
  }

  return (
    <div className="navbar">
      {isLoaded && sessionLinks}
      </div>
  );
}

export default Navigation;
