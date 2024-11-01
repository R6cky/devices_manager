import axios from "axios";

export const api = axios.create({
  baseURL: "https://devices-managerr.onrender.com",
  timeout: 3000,
});
