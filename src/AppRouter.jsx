import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './layouts/main/Main.layout';
import LandingPage from './containers/landing-page/LandingPage.container';
import Login from './containers/login/Login.container';
import SignUp from './containers/signup/Signup.container';
import Ride from './containers/ride/Ride.container';
import PrivateRoute from './components/PrivateRoute.component';

const AppRouter = () => (
  <React.Fragment>
    <Switch>
      <Main>
        <Route exact path="/" component={ LandingPage } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/signup" component={ SignUp } />
        <Route exact path="/ride" component={ Ride } />

        {/* <PrivateRoute exact path="/ride" component = { Ride }/> */}
      </Main>
    </Switch>
  </React.Fragment>
);

export default AppRouter;
