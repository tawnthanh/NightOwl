import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState("");

  const loginButton = (e) => {
    e.preventDefault();
    setPage("login");
    setShowModal(true)
  }

  const registerButton = (e) => {
    e.preventDefault();
    setPage("register");
    setShowModal(true);
  }
  return (
    <>
      <a href="/" onClick={loginButton}>Login</a>
      <a href="/register" onClick={registerButton}>Register</a>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          { page === "login" && (
            <LoginForm />
            )
          }
          { page === "register" && (
            <RegisterForm />
            )
          }
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
