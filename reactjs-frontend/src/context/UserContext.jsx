import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({});

export const Userprovider = ({ children }) => {
  const createUser = async (data) => {
    try {
      await api.post("/register", data);
      toast.success("Usuário Criado com sucesso!", {
        autoClose: 2000,
        theme: "dark",
      });
    } catch (error) {
      toast.error("Ops, o usuário não foi criado, algum erroaconteceu.", {
        autoClose: 2000,
        theme: "dark",
      });
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ createUser }}>
      {children}
    </UserContext.Provider>
  );
};
