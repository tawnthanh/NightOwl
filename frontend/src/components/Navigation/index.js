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
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
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
      <div>
        <NavLink className="nav" exact to="/">Home</NavLink>
      </div>
      {isLoaded && sessionLinks}
      </div>
  );
}

export default Navigation;
