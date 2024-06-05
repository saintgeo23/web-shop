import React from 'react';
import { NavLink } from "react-router-dom";
import logo from '../../../logo-64.svg';
import './Header.scss';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary app-header">
      <div className="container">
        <NavLink
          className="navbar-brand"
          to="/"
          end
        >
          <img
            className='app-header__logo'
            src={logo}
            alt='Logo'
          />
        </NavLink>

        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/account/login"
            >Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/account/register"
            >Register</NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/account"
              end
            >Account</NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/cart"
            >Cart</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
