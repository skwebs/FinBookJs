import axiosLib from "axios";
import { getToken } from "../services/tokenServices";


const axios = axiosLib.create({
  baseURL: 'http://192.168.31.112:8000/api',
  headers: {
    Accept: 'application/json',
    // Authorization:
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