import axios from "axios";

export const api = axios.create({
  baseURL: "https://devices-manager-1.onrender.com",
  timeout: 120000,
});
