import { toast } from "react-toastify";
import { api } from "../services/api";
import { createContext, useState } from "react";

export const TasContext = createContext({});

export const TasProvider = ({ children }) => {
  const [tas, setTas] = useState([]);
  const [insertTas, setInsertTas] = useState({});
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
  const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false);
  const [listReset, setListReset] = useState([]);

  const getTas = async () => {
    try {
      const requestJson = await api.get("/tas");
      setTas(requestJson.data);
      setListReset(requestJson.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createTas = async (data) => {
    try {
      await api.post("/tas", data);
      toast.success("Tas criado com sucesso!", {
        autoClose: 2000,
        theme: "dark",
      });
      getTas();
      setModalCreateIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTas = async (data, id) => {
    try {
      await api.patch(`/tas/${id}`, data);
      toast.success("Tas atualizado com sucesso!", {
        autoClose: 2000,
        theme: "dark",
      });
      getTas();
      setModalEditIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTas = async (id) => {
    try {
      await api.delete(`/tas/${id}`);
      toast.success("Tas deletado com sucesso!", {
        autoClose: 2000,
        theme: "dark",
      });
      getTas();
      setModalDeleteIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const openModalDelete = (id) => {
    localStorage.setItem("idTas", id);
    setModalDeleteIsOpen(true);
  };

  const openModalEdit = (data) => {
    localStorage.setItem("dataTas", JSON.stringify(data));
    setModalEditIsOpen(true);
  };

  const findTas = (input) => {
    if (input.trim().toLowerCase() !== "") {
      const foundTas = tas.filter((elem) => {
        return elem.hostname.toLowerCase().includes(input.toLowerCase().trim());
      });
      setTas(foundTas);
    }
  };

  const inputVoid = (input) => {
    if (input.trim().toLowerCase() === "") {
      setTas(listReset);
    }
  };

  return (
    <TasContext.Provider
      value={{
        getTas,
        tas,
        createTas,
        insertTas,
        updateTas,
        deleteTas,
        openModalDelete,
        openModalEdit,
        modalDeleteIsOpen,
        modalEditIsOpen,
        modalCreateIsOpen,
        setModalCreateIsOpen,
        setModalEditIsOpen,
        setModalDeleteIsOpen,
        findTas,
        inputVoid,
      }}
    >
      {children}
    </TasContext.Provider>
  );
};
