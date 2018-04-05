import React from 'react';
import { Link } from 'react-router-dom';

import logo from './img/logo.svg'

// Todo: fix to valid HTML syntax
const Nav = () => (
  <nav className="navbar navbar-default">
    <div className="container-all">
        <div className="navbar-header">
          <Link to="/"><img src={logo} className="logo"/>EduRide</Link>
        </div>
        <ul className="navigation login">
          <Link to="/login" className="main">Login</Link>
        </ul>
        <div className="navbar-menu-container">
          <ul className="navigation">
            <a className="main" href="#url">About</a>
            <li className="n1"><a href="#">item #1</a></li>
            <li className="n2"><a href="#">item #2</a></li>
            <li className="n3"><a href="#">item #3</a></li>
          </ul>
        </div>
    </div>
  </nav>
);

export default Nav;