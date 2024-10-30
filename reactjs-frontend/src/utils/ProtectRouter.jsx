import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoutes = () => {
  const userToken = localStorage.getItem("accesToken");
  return userToken ? <Outlet /> : <Navigate to="login" />;
};
