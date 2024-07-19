import { ComputerItemStyled } from "./Styled";
import { ComputerContext } from "../../../../context/ComputerContext";
import { useContext } from "react";

export const ComputerItem = ({ computer }) => {
  const { openModalDelete, openModalEdit } = useContext(ComputerContext);

  return (
    <ComputerItemStyled>
      <div className="item-content">
        <h3 className="item-content-hostname">Hostname: {computer.hostname}</h3>
        <h3 className="item-content-ip">IP: {computer.ip}</h3>
        <h3 className="item-content-sector">Setor: {computer.sector} </h3>
        <h3 className="item-content-os">SO: {computer.operational_system}</h3>
        <h3 className="item-content-type">Type: {computer.type}</h3>
      </div>
      <div className="item-buttons">
        <button onClick={() => openModalEdit(computer)} className="edit">
          Editar
        </button>
        <button onClick={() => openModalDelete(computer.id)} className="remove">
          remover
        </button>
      </div>
    </ComputerItemStyled>
  );
};
