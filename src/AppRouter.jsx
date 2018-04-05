import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './layouts/main/Main.layout';
import LandingPage from './containers/landing-page/LandingPage.container';
import Login from './containers/login/Login.container';

const AppRouter = () => (
  <React.Fragment>
    <Switch>
      <Main>
        <Route exact path="/" component={ LandingPage } />
        <Route exact path="/login" component={ Login } />
      </Main>
    </Switch>
  </React.Fragment>
);

export default AppRouter;
