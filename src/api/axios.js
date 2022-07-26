import axios from "axios";
import "./AxiosInterceptors";
// import { genericError } from '../utils/common'

/**
 * GET request method of axios
 *
 * @param {string} path url or path we want to hit
 * @returns the result will be the respone or error of the request
 */
export const get = (path, params) => {
  return axios
    .get(`${process.env.REACT_APP_API_BASE_URL || "/"}${path}`, params)
    .then((response) => response)
    .catch((err) => {
      return err.response
        ? { status: err.response.status, message: err.response.data.message }
        : err;
    });
};

export const patch = (path, params) => {
  return axios
    .patch(`${process.env.REACT_APP_API_BASE_URL || "/"}${path}`, params)
    .then((response) => response)
    .catch((err) => {
      return err.response
        ? { status: err.response.status, message: err.response.data.message }
        : err;
    });
};

/**
 * POST request method of axios
 *
 * @param {string} path url or path we want to hit
 * @param {object} data we want to pass to our request like body
 * @returns the result will be the respone or error of the request
 */
export const post = (path, data) => {
  return axios
    .post(`${process.env.REACT_APP_API_BASE_URL || "/"}${path}`, data, {
      headers: {
        "content-type": "application/json",
      },
    })
    .then((response) => response)
    .catch((err) => {
      return err.response ? { status: err.response.status } : err;
    });
};
