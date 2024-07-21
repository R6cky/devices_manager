import { api } from "../services/api";
import { createContext, useState } from "react";

export const BluebirdContext = createContext({});

// eslint-disable-next-line react/prop-types
export const BluebirdProvider = ({ children }) => {
  const [bluebirds, setBluebird] = useState([]);
  const [insertBluebird, setInsertBluebird] = useState({});
  const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false);
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
  const [listReset, setListReset] = useState([]);

  const getBluebirds = async () => {
    try {
      const bluebirds = await api.get("/bluebird");
      setBluebird(bluebirds.data);
      setListReset(bluebirds.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createBluebird = async (data) => {
    try {
      await api.post("/bluebird", data);
      getBluebirds();
      setModalCreateIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateBluebird = async (data, id) => {
    try {
      await api.patch(`/bluebird/${id}`, data);
      getBluebirds();
      setModalEditIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBluebird = async (id) => {
    try {
      await api.delete(`/bluebird/${id}`);
      getBluebirds();
      setModalDeleteIsOpen(false);
    } catch (error) {
      console.log(error);
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
      const foundBySn = bluebirds.filter((elem) => {
        return elem.serial_number
          .toLowerCase()
          .includes(input.toLowerCase().trim());
      });
      setBluebird(foundBySn);
    }

    if (input.trim().toLowerCase() !== "") {
      const foundByHn = bluebirds.filter((elem) => {
        return elem.hostname.toLowerCase().includes(input.toLowerCase().trim());
      });
      setBluebird(foundByHn);
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
      }}
    >
      {children}
    </BluebirdContext.Provider>
  );
};
