import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import ApiService, { AuthResult } from '../../../app/ApiService';
import './Register.scss';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const isValid = function() {
    return email && password && password === passwordRepeat;
  }

  const performRegister = async function() {
    if (!isValid()) {
      alert('Credentials are not valid!');
      return;
    }

    const authResult: AuthResult = await ApiService.register({
      email,
      password,
      commandId: 'dream_react_learning_team',
    });

    console.log('token', authResult.token);
    if (authResult.token) localStorage.setItem('auth_token', authResult.token);
  }

  return (
    <form className="app-register">
      <div className="form-outline mb-4">
        <label
          className="form-label"
          htmlFor="register_email"
        >Email address</label>
        <input
          id="register_email"
          className="form-control"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-outline mb-4">
        <label
          className="form-label"
          htmlFor="register_password"
        >Password</label>
        <input
          id="register_password"
          className="form-control"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="form-outline mb-4">
        <label
          className="form-label"
          htmlFor="register_password_repeat"
        >Repeat password</label>
        <input
          id="register_password_repeat"
          className="form-control"
          type="password"
          value={passwordRepeat}
          onChange={(e) => setPasswordRepeat(e.target.value)}
        />
      </div>

      <button
        className="btn btn-primary btn-block mb-4"
        type="button"
        onClick={performRegister}
      >Register</button>

      <div className="text-center">
        <p>Already a member? <NavLink to="/account/login">Login</NavLink></p>
      </div>
    </form>
  );
}

export default Register;
