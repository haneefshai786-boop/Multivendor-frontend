// src/api/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://ckend-6ozb.onrender.com", // your backend URL
});

export default API;
