import React from "react";

const UserInfoGit = ({ user }) => {
  const { login, type, avatar_url, url } = user
    ? typeof user === "string"
      ? JSON.parse(user)
      : user
    : {};
  return user ? (
    <>
      <div className="user-container">
        <h5 className="info-item">{login}</h5>
        <h5 className="info-item">{type}</h5>
        <h5 className="info-item">{avatar_url}</h5>
        <h5 className="info-item">{url}</h5>
      </div>
    </>
  ) : (
    <p>Loading...</p>
  );
};

export default UserInfoGit;
