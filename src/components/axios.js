import axios from 'axios';
import qs from 'qs';

axios.defaults.withCredentials = true;

const instance = axios.create({
  withCredentials: true,
  timeout: 6000,
  'Cache-Control': 'no-cache',
});

instance.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    config.data = Object.assign(config.data);
    config.data = qs.stringify(config.data);
  }
  if (config.method === 'get') {
    config.params = Object.assign(config.params);
  }
  config.params = Object.assign({
    _: Date.parse(new Date()) / 1000,
  }, config.params);
  return config;
});

instance.interceptors.response.use((response) => {
  return response.data;
});


export default instance;
