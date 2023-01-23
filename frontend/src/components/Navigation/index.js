import React from 'react';
import { Link } from 'react-router-dom';
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
        <div className="night-owl-logo">
          <Link className="nav" to="/dashboard">NIGHT OWL</Link>
        </div>
        <div className="profile-button">
          <ProfileButton user={sessionUser} />
        </div>

      </div>
    );
  } else {
    sessionLinks = (
      <div className="logged-out-nav">
        <div>
          <LoginFormModal />
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
