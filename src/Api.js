// src/Api.js
import axios from "axios";

// Hardcoded production backend URL
export const BASE_URL = "https://djangoportfolio-production-6822.up.railway.app/";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
