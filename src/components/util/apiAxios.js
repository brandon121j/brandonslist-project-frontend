import axios from "axios";

const ApiAxios = axios.create({
  baseURL: process.env.REACT_APP_AXIOS === 'development' ? 'http://localhost:4001/api' : '/api',
});

export default ApiAxios;