import axiosLib from "axios";
const axios = axiosLib.create({
  baseURL: 'http://10.0.2.2:8000/api',
  headers: {
    Accept: 'application/json',
    // Authorization:
  }
})

export default axios