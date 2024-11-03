import { toast } from "react-toastify";
import { api } from "../services/api";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const BluebirdContext = createContext({});

// eslint-disable-next-line react/prop-types
export const BluebirdProvider = ({ children }) => {
  const [bluebirds, setBluebird] = useState([]);
  const [insertBluebird, setInsertBluebird] = useState({});
  const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false);
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
  const [listReset, setListReset] = useState([]);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const getBluebirds = async () => {
    const token = localStorage.getItem("accesToken");
    try {
      const bluebirds = await api.get("/bluebird", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setloading(true);
      setBluebird(bluebirds.data);
      setListReset(bluebirds.data);
    } catch (error) {
      const { data } = error.response;
      console.log(data);
      navigate("/");
    } finally {
      setloading(false);
    }
  };

  const createBluebird = async (data) => {
    const token = localStorage.getItem("accesToken");

    try {
      await api.post("/bluebird", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Bluebird Criado com sucesso!", {
        autoClose: 2000,
        theme: "dark",
      });
      getBluebirds();
      setModalCreateIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateBluebird = async (data, id) => {
    const token = localStorage.getItem("accesToken");
    try {
      await api.patch(`/bluebird/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Bluebird atualizado com sucesso!", {
        autoClose: 2000,
        theme: "dark",
      });
      getBluebirds();
      setModalEditIsOpen(false);
    } catch (error) {
      const { data } = error.response;
      console.log(data);

      toast.error(data, {
        autoClose: 2000,
        theme: "dark",
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  const deleteBluebird = async (id) => {
    const token = localStorage.getItem("accesToken");

    try {
      await api.delete(`/bluebird/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Bluebird deletado com sucesso!", {
        autoClose: 2000,
        theme: "dark",
      });
      getBluebirds();
      setModalDeleteIsOpen(false);
    } catch (error) {
      const { data } = error.response;
      console.log(data);

      toast.error(data, {
        autoClose: 2000,
        theme: "dark",
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  const openModalDelete = (id) => {
    localStorage.setItem("idBluebird", id);
    setModalDeleteIsOpen(true);
  };

  const openModalEdit = (data) => {
    localStorage.setItem("dataBluebird", JSON.stringify(data));
    setModalEditIsOpen(true);
  };

  const findBluebird = (input) => {
    if (input.trim().toLowerCase() !== "") {
      const foundBb = bluebirds.filter((elem) => {
        return (
          elem.serial_number
            .toLowerCase()
            .includes(input.toLowerCase().trim()) ||
          elem.hostname.toLowerCase().includes(input.toLowerCase().trim())
        );
      });
      setBluebird(foundBb);
    }
  };

  const inputVoid = (input) => {
    if (input.trim().toLowerCase() === "") {
      setBluebird(listReset);
    }
  };

  return (
    <BluebirdContext.Provider
      value={{
        getBluebirds,
        bluebirds,
        createBluebird,
        insertBluebird,
        updateBluebird,
        deleteBluebird,
        modalCreateIsOpen,
        setModalCreateIsOpen,
        setModalEditIsOpen,
        modalEditIsOpen,
        openModalEdit,
        modalDeleteIsOpen,
        setModalDeleteIsOpen,
        openModalDelete,
        findBluebird,
        inputVoid,
        loading,
      }}
    >
      {children}
    </BluebirdContext.Provider>
  );
};
