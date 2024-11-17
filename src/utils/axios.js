import axiosLib from "axios";
import { getToken } from "../services/tokenServices";
import config from "../config";

const axios = axiosLib.create({
  baseURL: config.API_URL + '/api',
  // baseURL: 'http://192.168.31.112:8000/api',
  headers: {
    Accept: 'application/json',
  }
});

axios.interceptors.request.use(async (req) => {
  const token = await getToken();

  if (token !== null) {
    req.headers["Authorization"] = `Bearer ${token}`;
  }
  return req;
})

export default axios