import axios from 'axios';
import logger from './logService';

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
  }
  return Promise.reject(error);
});

const setJwtToken = token => {
  axios.defaults.headers.common['x-auth-token'] = token;
};

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
  setJwtToken
};
