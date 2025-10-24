// src/api/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://vendor-backend-6ozb.onrender.com", // your backend live URL
});

export default API;
