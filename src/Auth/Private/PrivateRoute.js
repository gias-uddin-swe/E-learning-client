import React, { useContext, useState } from "react";
import { Redirect, useAuth } from "react-router";
import { Route } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const email = localStorage.getItem("email");

  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    </div>
  );
};

export default PrivateRoute;
