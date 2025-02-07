import axios from "axios";

export const api = axios.create({
  //baseURL: "https://devices-managerr.onrender.com",
  baseURL: "http://localhost:3001",
  timeout: 15000,
});
