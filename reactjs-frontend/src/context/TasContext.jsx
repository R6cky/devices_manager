import { api } from "../services/api";
import { createContext, useState } from "react";

export const TasContext = createContext({});

// eslint-disable-next-line react/prop-types
export const TasProvider = ({ children }) => {
  const [tas, setTas] = useState([]);
  const [insertTas, setInsertTas] = useState({});
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
  const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false);

  const getTas = async () => {
    try {
      const requestJson = await api.get("/tas");
      setTas(requestJson);
    } catch (error) {
      console.log(error);
    }
  };

  const createTas = async (data) => {
    try {
      await api.post("/tas", data);
      getTas();
      setModalCreateIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTas = async (data, id) => {
    try {
      await api.patch(`/tas/${id}`, data);
      getTas();
      setModalEditIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTas = async (id) => {
    try {
      await api.delete(`/tas/${id}`);
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
      }}
    >
      {children}
    </TasContext.Provider>
  );
};
