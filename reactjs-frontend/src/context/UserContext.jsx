import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({});

export const Userprovider = ({ Children }) => {
  const createUser = async (data) => {
    try {
      await api.post("/create", data);
      toast.success("Usuário Criado com sucesso!", {
        autoClose: 2000,
        theme: "dark",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={createUser}>{Children}</UserContext.Provider>
  );
};
