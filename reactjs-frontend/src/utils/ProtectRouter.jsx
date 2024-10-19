import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoutes = () => {
  const userToken = localStorage.getItem("accesToken");
  console.log(userToken);
  return userToken ? <Outlet /> : <Navigate to="login" />;
};
