/* eslint-disable no-param-reassign */
import { dblClick } from "@testing-library/user-event/dist/click";
import axios from "axios";

const generateHeaderReq = (config, accessToken) => {
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
};

// Add a request interceptor
axios.interceptors.request.use((config) => {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    if (config.url !== `${process.env.REACT_APP_API_BASE_URL}auth/signin`) {
      const accessToken = localStorage.getItem("accessToken") || null;
      if (accessToken) {
        resolve(generateHeaderReq(config, accessToken));
      }
    } else {
      resolve(config);
    }
  });
});
