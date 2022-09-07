import React from "react";
import UserInfoGit from "./UserInfoGit";
import ResourceLoader from "../../helper/api";

const GitUserDetails = () => {
  const api_url = process.env.REACT_APP_API_ENDPOINT;

  return (
    <>
      <ResourceLoader
        resourceUrl={api_url + "/users/anurag-311"}
        resourceName="user"
      >
        <UserInfoGit />
      </ResourceLoader>
    </>
  );
};

export default GitUserDetails;
