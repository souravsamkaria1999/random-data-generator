import React from "react";
import "../style.css";
const UserInfoGit = ({ user }) => {
  const { login, type, avatar_url, url } = user
    ? typeof user === "string"
      ? JSON.parse(user)
      : user
    : {};
  return user ? (
    <>
      <h3 className="data-heading">Github user data</h3>
      <div className="github-user-data">
        <div className="github-user-info">
          <h4 className="data-label-user-heading">User Name:</h4>{" "}
          <p className="data-values"> {login}</p>
        </div>
        <div className="github-user-info">
          <h4 className="data-label-heading">Admin/User:</h4>{" "}
          <p className="data-values">{type}</p>
        </div>
        <div className="github-user-info">
          <h4 className="data-label-heading"> Image:</h4>
          <img src={avatar_url} width="50px" height={50} alt='image'/>
        </div>
        <div className="github-user-info">
          <h4 className="data-label-heading"> link: </h4>
          <p className="data-values"> {url}</p>
        </div>
      </div>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};

export default UserInfoGit;
