import React, { Component } from 'react';
import logo from './logo.svg';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">EduRide</h1>
          <p className="App-intro">
        Schedule and book rides for your children from the people you know and trust - fellow parents, guardians, and members of your school community. 
        </p>
        </header>
       
      </div>
    );
  }
}

export default App;
