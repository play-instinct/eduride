import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from 'reduxFolder/store/configureStore';
 
const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <h1>App</h1>
    </ConnectedRouter>
  </Provider>
);
 
export default App;