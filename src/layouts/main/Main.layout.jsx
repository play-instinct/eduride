import React from 'react';

import './Main.layout.css';
import logo from './img/logo.svg';

import Nav from './_parts/nav/Nav.component';

const Main = props => (
  <div className="App">
    <div className = "overall-nav">
      <Nav />
    </div>
    <header className="App-header">
      <img src={logo} className="logo" alt="Car"/>
      <h1 className="App-title">EduRide</h1>
      <hr/>
      <p className="App-intro">
        Schedule and book rides for your children from the people you know and trust - fellow parents, guardians, and members of your school community. 
      </p>
      {props.children}
    </header>
    
    <div className="action-container"><button className="sign-up-btn">Sign Up</button></div>
  </div>
)

export default Main;
