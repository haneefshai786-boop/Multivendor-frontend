import axios from "axios";

const API = axios.create({
  baseURL: "https://multivendor-backend-6ozb.onrender.com", // your backend URL
});

export default API;
