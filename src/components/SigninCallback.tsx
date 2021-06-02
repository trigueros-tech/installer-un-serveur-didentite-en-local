import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { userManager } from "../utils/authentication";

const SigninCallback = () => {

  const history = useHistory();
  
  useEffect(() => {
    userManager.signinCallback().then(() => history.go(-2));
  }, [history]);

  return <h1>Sign in callback</h1>;
};

export default SigninCallback;
