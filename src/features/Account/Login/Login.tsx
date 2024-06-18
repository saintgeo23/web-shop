import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import ApiService, { AuthResult } from '../../../app/ApiService';
import './Login.scss';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const isValid = function() {
    return email && password;
  }

  const performLogin = async function() {
    if (!isValid()) {
      alert('Credentials are not valid!');
      return;
    }

    const authResult: AuthResult = await ApiService.login({
      email,
      password,
    });

    console.log('token', authResult.token);
    if (authResult.token) localStorage.setItem('auth_token', authResult.token);
  }

  return (
    <form className="app-login">
      <div className="form-outline mb-4">
        <label
          className="form-label"
          htmlFor="login_email"
        >Email address</label>
        <input
          id="login_email"
          className="form-control"
          type="email"
        />
      </div>

      <div className="form-outline mb-4">
        <label
          className="form-label"
          htmlFor="login_password"
        >Password</label>
        <input
          id="login_password"
          className="form-control"
          type="password"
        />
      </div>

      <button
        className="btn btn-primary btn-block mb-4"
        type="button"
        onClick={performLogin}
      >Sign in</button>

      <div className="text-center">
        <p>Not a member? <NavLink to="/account/register">Register</NavLink></p>
      </div>
    </form>
  );
}

export default Login;
