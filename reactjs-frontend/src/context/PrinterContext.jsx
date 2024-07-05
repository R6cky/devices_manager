import { api } from "../services/api";
import { createContext, useState } from "react";

export const PrinterContext = createContext({});

// eslint-disable-next-line react/prop-types
export const PrinterProvider = ({ children }) => {
  const [prints, setPrint] = useState([]);
  const [insertPrint, setInsertPrint] = useState({});
  const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false);
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);

  const getPrints = async () => {
    try {
      const requestJson = await api.get("/print");
      setPrint(requestJson);
    } catch (error) {
      console.log(error);
    }
  };

  const createPrint = async (data) => {
    try {
      const requestJson = await api.post("/print", data);
      setInsertPrint(requestJson);
    } catch (error) {
      console.log(error);
    }
  };

  const updatePrint = async (data, id) => {
    try {
      const requestJson = await api.patch(`/print/${id}`, data);
      console.log(requestJson);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePrint = async (id) => {
    try {
      await api.delete(`/print/${id}`);
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
    <PrinterContext.Provider
      value={{
        getPrints,
        prints,
        createPrint,
        insertPrint,
        updatePrint,
        deletePrint,
        openModalDelete,
        openModalEdit,
        modalCreateIsOpen,
        modalDeleteIsOpen,
        modalEditIsOpen,
        setModalCreateIsOpen,
      }}
    >
      {children}
    </PrinterContext.Provider>
  );
};
