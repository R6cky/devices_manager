import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 3000,
});
//https://devices-manager.onrender.com
