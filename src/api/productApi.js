import api from "./axios"; // <-- note: './axios' (same folder)

export const getProducts = async () => {
  const res = await api.get("/api/products");
  return res.data;
};

