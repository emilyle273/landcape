import axios from 'axios';

const request = axios.create({
  baseURL: 'https://land-server.herokuapp.com/',
  timeout: 30000,
});

export default request