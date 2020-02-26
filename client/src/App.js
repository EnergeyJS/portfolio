import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './root.store';


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

const App = () => {
    return (
      <Provider store={store}>
        <Router>
          <Header/>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
                <Route path={`${process.env.PUBLIC_URL}/services`} component={Services} />

                <Route path={`${process.env.PUBLIC_URL}/create-user`} component={CreateUser} />
                <Route path={`${process.env.PUBLIC_URL}/update-user/:id`} component={UpdateUser} />

                <Route path={`${process.env.PUBLIC_URL}/create-service`} component={CreateService} />
                <Route path={`${process.env.PUBLIC_URL}/update-service/:id`} component={UpdateService} />
                <Route path={`${process.env.PUBLIC_URL}/team`} component={Team} />
                <Route path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />
                <Route path={`${process.env.PUBLIC_URL}/login`} component={Login} />
                <Route path={`${process.env.PUBLIC_URL}/forgot`} component={ForgotPassword} />
                <Route path={`${process.env.PUBLIC_URL}/register`} component={RegisterForm} />

                <Route path="*" component={NotFound} />
                <Footer/>
        </Router>
      </Provider>
    );
  };
  
  export default App;