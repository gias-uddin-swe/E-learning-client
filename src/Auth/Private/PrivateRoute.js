import React, { useState } from "react";
import { Redirect } from "react-router";
import { Route } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const email = sessionStorage.getItem("email");
  console.log(email);

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
