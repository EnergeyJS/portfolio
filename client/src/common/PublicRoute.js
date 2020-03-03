import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
        localStorage.hasOwnProperty('authToken') ? (
            <Redirect to="/" />
            ) : (
            <Component {...props} />
      )
    }
  />
);