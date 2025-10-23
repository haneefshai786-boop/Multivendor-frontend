
import axios from "axios";

const api = axios.create({
  baseURL: "https://multivendor-backend-6ozb.onrender.com", // backend URL
  withCredentials: true,
});

export default api;
