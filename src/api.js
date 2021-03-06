import Axios from "axios";
import {Error} from "./common.js";

export const createAPI = (onUnauthorized) => {
  const api = Axios.create({
    baseURL: `https://4.react.pages.academy/wtw`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onError = (error) => {
    const errorStatus = error.response ? error.response.status : 1;
    if (errorStatus === Error.UNAUTHORIZED) {
      onUnauthorized();

      throw error;
    }

    throw error;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};
