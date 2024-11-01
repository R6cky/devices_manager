import axios from "axios";

export const api = axios.create({
  baseURL: "https://devices-manager.onrender.com",
  //baseURL: "http://localhost:3000",
  timeout: 3000,
});
