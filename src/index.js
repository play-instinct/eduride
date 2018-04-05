import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './redux/store/configure-store';
import './App.css';
import  logo from './logo.svg'

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
    <div className="App">
    <div className = "overall-nav">
        <nav className="navbar navbar-default">
            <div className="container-all">
                <div className="navbar-header">
                  <a href="#"><img src={logo} className="logo"/>EduRide</a>
                </div>
                <ul className="navigation login"><a className="main" href="#url">Login</a></ul>

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
    </div>
        <header className="App-header">
        <img src={logo} className="logo"/>
          <h1 className="App-title">EduRide</h1>
          <hr/>
          <p className="App-intro">
        Schedule and book rides for your children from the people you know and trust - fellow parents, guardians, and members of your school community. 
        </p>
        
        </header>
       
        <div className="action-container"><button className="sign-up-btn">Sign Up</button></div>
      </div>
    </ConnectedRouter>
  </Provider>
);
 
const rootEl = document.getElementById('root');

ReactDOM.render(
    <App/>
, rootEl);