import axios from "axios";

const ApiAuth = () => {
  const api_token = null;
  const client = null;
  const api_url = process.env.REACT_APP_API_ENDPOINT;

  init = () => {
    api_token = getCookie("ACCESS_TOKEN");
    let headers = {
      Accept: "application/json",
    };
    if (api_token) {
      headers.Authorization = `Bearer ${api_token}`;
    }
    client = axios.create({
      baseURL: api_url,
      timeout: 31000,
      headers: headers,
    });
    return client;
  };

  getUserList = (params) => {
    return init().get("/users/anurag-311", { params: params });
  };

  addNewUser = (data) => {
    return init().post("/users", data);
  };
};

export default ApiAuth;
