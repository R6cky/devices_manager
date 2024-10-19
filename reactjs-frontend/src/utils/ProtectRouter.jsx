import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoutes = () => {
  const user = true;

  return user ? <Outlet /> : <Navigate to="login" />;
};
