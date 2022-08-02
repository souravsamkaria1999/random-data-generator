import { React, useContext } from "react";
import AuthContext from "./AuthContext";

const User = () => {
  const authCtx = useContext(AuthContext);
  console.log(authCtx);
  return <div>{authCtx.token}</div>;
};

export default User;
