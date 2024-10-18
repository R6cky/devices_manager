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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ createUser }}>
      {children}
    </UserContext.Provider>
  );
};
