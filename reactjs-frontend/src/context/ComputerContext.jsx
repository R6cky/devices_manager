import { api } from "../services/api";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const ComputerContext = createContext({});

export const ComputerProvider = ({ children }) => {
  const [computers, setComputers] = useState([]);
  const [insertComputer, setInsertComputer] = useState({});
  const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false);
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
  const [listReset, setListReset] = useState([]);

  const getComputers = async () => {
    try {
      const requestJson = await api.get("/computer");
      setComputers(requestJson.data);
      setListReset(requestJson.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createComputer = async (data) => {
    try {
      await api.post("/computer", data);
      toast.success("Computador criado com sucesso", {
        autoClose: 2000,
        theme: "dark",
      });
      getComputers();
      setModalCreateIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateComputer = async (data, id) => {
    try {
      await api.patch(`/computer/${id}`, data);
      toast.success("Computador editado com sucesso", {
        autoClose: 2000,
        theme: "dark",
      });
      getComputers();
      setModalEditIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComputer = async (id) => {
    try {
      await api.delete(`/computer/${id}`);
      toast.success("Computador deletado com sucesso", {
        autoClose: 2000,
        theme: "dark",
      });
      getComputers();
      setModalDeleteIsOpen(false);
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

  const findComputer = (input) => {
    if (input.trim().toLowerCase() !== "") {
      const findComputer = computers.filter((elem) => {
        return (
          elem.hostname.toLowerCase().includes(input.toLowerCase().trim()) ||
          elem.ip.toLowerCase().includes(input.toLowerCase().trim())
        );
      });
      setComputers(findComputer);
    }
  };

  const inputVoid = (input) => {
    if (input.trim().toLowerCase() === "") {
      setComputers(listReset);
    }
  };
  return (
    <ComputerContext.Provider
      value={{
        getComputers,
        computers,
        createComputer,
        insertComputer,
        updateComputer,
        deleteComputer,
        modalCreateIsOpen,
        setModalCreateIsOpen,
        modalDeleteIsOpen,
        setModalDeleteIsOpen,
        modalEditIsOpen,
        setModalEditIsOpen,
        openModalDelete,
        openModalEdit,
        findComputer,
        inputVoid,
      }}
    >
      {children}
    </ComputerContext.Provider>
  );
};
