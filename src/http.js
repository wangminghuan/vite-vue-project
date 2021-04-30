import axios from "axios"
import qs from "qs"
const Http = axios.create({
  baseURL: '/api',
  timeout: 10000
});
Http.interceptors.request.use(async config => {
const _comParams={
};
  if (config.method === 'post') {
    if (!config.data) config.data = {};
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    config.data = qs.stringify({..._comParams, ...config.data });
    // eslint-disable-next-line no-self-assign
    config.data = config.data;
  } else if (config.method === 'get') {
    config.params = {
      ..._comParams,
      ...config.params
    };
      // eslint-disable-next-line no-self-assign
      config.params = config.params;
  }

  return config;
}, error => {
  return Promise.reject(error);
});
Http.interceptors.response.use(async response => {
  return response.data;
}, error => {
  return Promise.reject(error);
});
export default Http;