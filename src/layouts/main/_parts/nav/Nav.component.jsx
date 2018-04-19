import React from 'react';
import { Link } from 'react-router-dom';

import logo from './img/logo.svg'

const Nav = () => (
  <nav className="navbar navbar-default">
    <div className="container-all">
        <div className="navbar-header">
          <Link to="/"><img src={logo} className="logo"/>EduRide</Link>
        </div>
        <ul className="navigation">
          <li className="login-link">
            <Link to="/login" className="main">Login</Link>
          </li>
        </ul>
        <div className="navbar-menu-container">
          <ul className="navigation">
          <li>
            <a className="main" href="#url">About</a>
          </li>
          </ul>
        </div>
    </div>
  </nav>
);

export default Nav;