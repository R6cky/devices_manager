import { toast } from "react-toastify";
import { api } from "../services/api";
import { createContext, useState } from "react";

export const PrinterContext = createContext({});

// eslint-disable-next-line react/prop-types
export const PrinterProvider = ({ children }) => {
  const [printers, setPrinters] = useState([]);
  const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false);
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
  const [listReset, setListReset] = useState([]);

  const getPrinter = async () => {
    try {
      const requestJson = await api.get("/print");
      setPrinters(requestJson.data);
      setListReset(requestJson.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createPrinter = async (data) => {
    try {
      await api.post("/print", data);
      toast.success(" Impressora criada com sucesso!", {
        autoClose: 2000,
        theme: "dark",
      });
      getPrinter();
      setModalCreateIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updatePrinter = async (data, id) => {
    try {
      await api.patch(`/print/${id}`, data);
      toast.success(" Impressora atualizada com sucesso!", {
        autoClose: 2000,
        theme: "dark",
      });
      getPrinter();
      setModalEditIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePrinter = async (id) => {
    try {
      await api.delete(`/print/${id}`);
      toast.success(" Impressora deletada com sucesso!", {
        autoClose: 2000,
        theme: "dark",
      });
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

  const findPrinter = (input) => {
    if (input.trim().toLowerCase() !== "") {
      const foundPrinter = printers.filter((elem) => {
        return (
          elem.hostname.toLowerCase().includes(input.toLowerCase().trim()) ||
          elem.ip.toLowerCase().includes(input.toLowerCase().trim()) ||
          elem.queue_name.toLowerCase().includes(input.toLowerCase().trim())
        );
      });
      setPrinters(foundPrinter);
    }
  };

  const inputVoid = (input) => {
    if (input.trim().toLowerCase() === "") {
      setPrinters(listReset);
    }
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
        inputVoid,
        findPrinter,
      }}
    >
      {children}
    </PrinterContext.Provider>
  );
};
