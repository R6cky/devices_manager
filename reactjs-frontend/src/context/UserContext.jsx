import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({});

export const Userprovider = ({ children }) => {
  const createUser = async (data) => {
    try {
      await api.post("/register", data);
      toast.success(`O usuário ${data.email} foi Criado com sucesso!`, {
        autoClose: 2000,
        theme: "dark",
      });
      console.log(data);
      window.location.replace("/login");
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
      const { accesToken, refreshToken } = dataJson.data;
      localStorage.setItem("accesToken", accesToken);
      //localStorage.setItem("refreshToken", refreshToken);
      window.location.replace("/bluebird");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ createUser, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};
