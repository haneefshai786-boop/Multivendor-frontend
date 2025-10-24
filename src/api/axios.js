import axios from "axios";

const instance = axios.create({
  baseURL: "https://multivendor-backend-6ozb.onrender.com", // your backend
  withCredentials: true,
});

export default instance;
