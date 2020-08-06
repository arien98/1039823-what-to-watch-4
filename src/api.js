import Axios from "axios";

const Error = {
  UNAUTHORIZED: 401,
};

export const createAPI = (onUnauthorized) => {
  const api = Axios.create({
    baseURL: `https://4.react.pages.academy/wtw`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (responce) => {
    return responce;
  };

  const onError = (error) => {
    const {responce} = error;

    if (responce.status === Error.UNAUTHORIZED) {
      onUnauthorized();

      throw error;
    }

    throw error;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};
