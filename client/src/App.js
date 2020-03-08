import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from "jwt-decode";
import store from './root.store';

//Types import
import { AUTH_TOKEN } from './actions/types';

//Actions import
import {logoutUser, setCurrentUser} from './actions/authAction';

//Utility function import

import setAuthToken from './utils/setAuthToken';


// component import
import Header from '../src/layout/Navbar';
import NotFound from "../src/layout/Page404";
import Footer from "../src/layout/Footer";
import Home from "../src/pages/Home";
import Services from "../src/pages/Services";
import Contact from "../src/pages/Contact";
import Team from "./pages/team/Index";

// user
import CreateUser from '../src/pages/users/CreateUser';
import UpdateUser from '../src/pages/users/UpdateUser';

// admin login 
import {Login} from "../src/pages/admin/Login";
import ForgotPassword from "../src/pages/admin/ForgotPassword";
import RegisterForm from "../src/pages/admin/RegisterForm";

// service
import CreateService from '../src/pages/services/CreateService';
import UpdateService from '../src/pages/services/UpdateService';

import {PrivateRoute} from './common/PrivateRoute';

if (localStorage[AUTH_TOKEN]) {
  // Set auth token header auth
  setAuthToken(localStorage[AUTH_TOKEN]);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage[AUTH_TOKEN]);

  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired Token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "/";
  }
}



const App = () => {
    return (
      <Provider store={store}>
        <Router>
           <Header/>

              
                <Route path={`${process.env.PUBLIC_URL}/login`} component={Login} />              
                <Route path={`${process.env.PUBLIC_URL}/forgot`} component={ForgotPassword} />
                <Route path={`${process.env.PUBLIC_URL}/register`} component={RegisterForm} />

              <Switch>
                <PrivateRoute exact path={`${process.env.PUBLIC_URL}/`} component={Home}/>
              </Switch>

              <Switch>
                <PrivateRoute path={`${process.env.PUBLIC_URL}/services`} component={Services}/>
              </Switch>

              <Switch>
                <PrivateRoute path={`${process.env.PUBLIC_URL}/create-user`} component={CreateUser} />
              </Switch>

                <Switch>
                <PrivateRoute path={`${process.env.PUBLIC_URL}/update-user/:id`} component={UpdateUser} />
                
                </Switch>

                <Switch>
                  <PrivateRoute path={`${process.env.PUBLIC_URL}/create-service`} component={CreateService} />
                </Switch>

                <Switch>
                   <PrivateRoute path={`${process.env.PUBLIC_URL}/update-service/:id`} component={UpdateService} />
                </Switch>

                <Switch>
                    <PrivateRoute path={`${process.env.PUBLIC_URL}/team`} component={Team} />
                </Switch>

                <Switch>
                   <PrivateRoute path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />
                </Switch>

                <Route path="*" component={NotFound} />

                <Footer/>
        </Router>
      </Provider>
    );
  };
  
  export default App;