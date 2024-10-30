import { api } from "../services/api";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ComputerContext = createContext({});

export const ComputerProvider = ({ children }) => {
  const [computers, setComputers] = useState([]);
  const [insertComputer, setInsertComputer] = useState({});
  const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false);
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
  const [listReset, setListReset] = useState([]);
  const navigate = useNavigate();

  const getComputers = async () => {
    const token = localStorage.getItem("accesToken");
    try {
      const requestJson = await api.get("/computer", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setComputers(requestJson.data);
      setListReset(requestJson.data);
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };

  const createComputer = async (data) => {
    const token = localStorage.getItem("accesToken");
    try {
      await api.post("/computer", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Computador criado com sucesso", {
        autoClose: 2000,
        theme: "dark",
      });
      getComputers();
      setModalCreateIsOpen(false);
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };

  const updateComputer = async (data, id) => {
    const token = localStorage.getItem("accesToken");

    try {
      await api.patch(`/computer/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Computador editado com sucesso", {
        autoClose: 2000,
        theme: "dark",
      });
      getComputers();
      setModalEditIsOpen(false);
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };

  const deleteComputer = async (id) => {
    const token = localStorage.getItem("accesToken");

    try {
      await api.delete(`/computer/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Computador deletado com sucesso", {
        autoClose: 2000,
        theme: "dark",
      });
      getComputers();
      setModalDeleteIsOpen(false);
    } catch (error) {
      console.log(error);
      navigate("/");
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
