import React from "react";
import AuthContext from "./AuthContext";

const AuthData = (props) => {
  const [token, settoken] = React.useState("abchelllo!");

  return (
    <AuthContext.Provider value={token}>{props.children}</AuthContext.Provider>
  );
};

export default AuthData;
