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
      {props.children}
    </header>
  </div>
)

export default Main;
