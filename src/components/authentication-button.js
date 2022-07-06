import React from "react";

import LoginButton from "./login-button";
import { Redirect } from "react-router";

import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <Redirect to="/setup" /> : <LoginButton />;
};

export default AuthenticationButton;