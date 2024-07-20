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
  const [searchList, setSearchList] = useState([]);

  const getBluebirds = async () => {
    try {
      const bluebirds = await api.get("/bluebird");
      console.log(bluebirds);
      setBluebird(bluebirds.data);
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
    if (input.trim() !== "") {
      const foundBySn = bluebirds.filter((elem) => {
        return elem.serial_number.toLowerCase().includes(input.toLowerCase());
      });
      setSearchList(foundBySn);
    } else {
      getBluebirds();
    }
  };

  const inputVoid = (input) => {
    if (input.trim().toLowerCase().trim() === "") {
      setBluebird(searchList);
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
        searchList,
        inputVoid,
      }}
    >
      {children}
    </BluebirdContext.Provider>
  );
};
