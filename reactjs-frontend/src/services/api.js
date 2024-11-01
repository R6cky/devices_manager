import axios from "axios";

export const api = axios.create({
  baseURL: "https://devices-manager.onrender.com",
  timeout: 3000,
});
