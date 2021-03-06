import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";
import { useHistory } from 'react-router-dom';

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(sessionActions.login({ credential, password }))
      .then( res => history.push("/dashboard"))
      .catch(
      (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      }
    );
  };

  return (
    <>
      <h2>Hoo are you...</h2>
      <form onSubmit={handleSubmit}>
        {errors.map((error, idx) => (
          <p className="login-error" key={idx}>{error}</p>
        ))}
        <div className="username">
          <label>
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
              placeholder="Email/Username"
            />
          </label>
        </div>
        <div className="password">
          <label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </label>
        </div>
        <button className="enter-site" type="submit">Enter</button>
        <button className="demoUser" onClick={() => {
           dispatch(sessionActions.login({ credential: 'StephSoo', password: 'password' }))
           .then( res => history.push("/dashboard"))
           .catch(
           (res) => {
             if (res.data && res.data.errors) setErrors(res.data.errors);
           }
         );
        }}>Demo User</button>
      </form>
    </>
  );
}

export default LoginForm;
