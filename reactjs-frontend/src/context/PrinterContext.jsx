import { api } from "../services/api";
import { createContext, useState } from "react";

export const PrinterContext = createContext({});

// eslint-disable-next-line react/prop-types
export const PrinterProvider = ({ children }) => {
  const [printers, setPrinters] = useState([]);
  const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false);
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);

  const getPrinter = async () => {
    try {
      const requestJson = await api.get("/print");
      setPrinters(requestJson);
    } catch (error) {
      console.log(error);
    }
  };

  const createPrinter = async (data) => {
    try {
      await api.post("/print", data);
      getPrinter();
      setModalCreateIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updatePrinter = async (data, id) => {
    try {
      await api.patch(`/print/${id}`, data);
      getPrinter();
      setModalEditIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePrinter = async (id) => {
    try {
      await api.delete(`/print/${id}`);
      getPrinter();
      setModalDeleteIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const openModalDelete = (id) => {
    localStorage.setItem("idPrinter", id);
    setModalDeleteIsOpen(true);
  };

  const openModalEdit = (data) => {
    localStorage.setItem("dataPrinter", JSON.stringify(data));
    setModalEditIsOpen(true);
  };

  return (
    <PrinterContext.Provider
      value={{
        getPrinter,
        printers,
        createPrinter,
        updatePrinter,
        deletePrinter,
        openModalDelete,
        openModalEdit,
        modalCreateIsOpen,
        modalDeleteIsOpen,
        modalEditIsOpen,
        setModalCreateIsOpen,
        setModalDeleteIsOpen,
        setModalEditIsOpen,
      }}
    >
      {children}
    </PrinterContext.Provider>
  );
};
