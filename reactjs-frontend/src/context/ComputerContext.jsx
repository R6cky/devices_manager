import { api } from "../services/api";
import { createContext, useState } from "react";

export const ComputerContext = createContext({});

export const ComputerProvider = ({ children }) => {
  const [computers, setComputers] = useState([]);
  const [insertComputer, setInsertComputer] = useState({});
  const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false);
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);

  const getComputers = async () => {
    try {
      const requestJson = await api.get("/computer");
      setComputers(requestJson);
    } catch (error) {
      console.log(error);
    }
  };

  const createComputer = async (data) => {
    try {
      const requestJson = await api.post("/computer", data);
      setInsertComputer(requestJson);
    } catch (error) {
      console.log(error);
    }
  };

  const updateComputers = async (data, id) => {
    try {
      const requestJson = await api.patch(`/computer/${id}`, data);
      console.log(requestJson);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComputers = async (id) => {
    try {
      await api.delete(`/computer/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const openModalDelete = (id) => {
    localStorage.setItem("idComputer", id);
    setModalDeleteIsOpen(true);
  };

  const openModalEdit = (data) => {
    localStorage.setItem("dataComputer", JSON.stringify(data));
    setModalEditIsOpen(true);
  };

  return (
    <ComputerContext.Provider
      value={{
        getComputers,
        computers,
        createComputer,
        insertComputer,
        updateComputers,
        deleteComputers,
        modalCreateIsOpen,
        setModalCreateIsOpen,
        modalDeleteIsOpen,
        setModalDeleteIsOpen,
        modalEditIsOpen,
        setModalEditIsOpen,
        openModalDelete,
        openModalEdit,
      }}
    >
      {children}
    </ComputerContext.Provider>
  );
};
