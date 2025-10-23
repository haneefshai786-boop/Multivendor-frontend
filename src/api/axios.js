import axios from "axios";

// Use environment variable from .env
const API = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: API, // automatically prefixes all requests
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: handle token if you use authentication
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
