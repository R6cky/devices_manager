import { api } from "../services/api";
import { createContext, useState } from "react";

export const TonerContext = createContext({});

// eslint-disable-next-line react/prop-types
export const TonerProvider = ({ children }) => {
  const [toner, setToner] = useState([]);
  const [inserttoner, setInsertToner] = useState({});
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
  const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false);
  const [listReset, setListReset] = useState([]);

  const getToner = async () => {
    try {
      const requestJson = await api.get("/toner");
      setToner(requestJson.data);
      setListReset(requestJson.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createToner = async (data) => {
    try {
      const requestJson = await api.post("/toner", data);
      setInsertToner(requestJson);
      getToner();
      setModalCreateIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateToner = async (data, id) => {
    try {
      await api.patch(`/toner/${id}`, data);
      getToner();
      setModalEditIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteToner = async (id) => {
    try {
      await api.delete(`/toner/${id}`);
      getToner();
      setModalDeleteIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const openModalDelete = (id) => {
    localStorage.setItem("idToner", id);
    setModalDeleteIsOpen(true);
  };

  const openModalEdit = (data) => {
    localStorage.setItem("dataToner", JSON.stringify(data));
    setModalEditIsOpen(true);
  };

  const findToner = (input) => {
    if (input.trim().toLowerCase() !== "") {
      const findComputer = toner.filter((elem) => {
        return elem.model.toLowerCase().includes(input.toLowerCase().trim());
      });
      setToner(findComputer);
    }
  };

  const inputVoid = (input) => {
    if (input.trim().toLowerCase() === "") {
      setToner(listReset);
    }
  };

  return (
    <TonerContext.Provider
      value={{
        getToner,
        toner,
        createToner,
        inserttoner,
        updateToner,
        deleteToner,
        openModalDelete,
        openModalEdit,
        modalDeleteIsOpen,
        modalEditIsOpen,
        modalCreateIsOpen,
        setModalEditIsOpen,
        setModalDeleteIsOpen,
        setModalCreateIsOpen,
        inputVoid,
        findToner,
      }}
    >
      {children}
    </TonerContext.Provider>
  );
};
