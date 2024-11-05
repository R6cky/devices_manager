import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const Userprovider = ({ children }) => {
  const navigate = useNavigate();

  const createUser = async (data) => {
    try {
      await api.post("/register", data);
      toast.success(`O usuário ${data.email} foi Criado com sucesso!`, {
        autoClose: 2000,
        theme: "dark",
      });
      console.log(data);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async (data) => {
    try {
      const dataJson = await api.post("/login", data);
      toast.success(`Bem vindo ${data.email}!`, {
        autoClose: 2000,
        theme: "dark",
      });
      const { accesToken } = dataJson.data;
      localStorage.setItem("accesToken", accesToken);
      navigate("/bluebird");
    } catch (error) {
      console.log(error);
    }
  };

  const clearUser = () => {
    localStorage.clear();
    window.location.replace("/login");
  };

  return (
    <UserContext.Provider value={{ createUser, loginUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};
