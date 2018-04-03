import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './redux/store/configure-store';
 
const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <h1>App</h1>
    </ConnectedRouter>
  </Provider>
);
 
const rootEl = document.getElementById('root');

ReactDOM.render(
    <App/>
, rootEl);