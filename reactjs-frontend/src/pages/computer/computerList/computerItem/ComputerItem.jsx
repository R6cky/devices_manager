import { ComputerItemStyled } from "./Styled";
import { ComputerContext } from "../../../../context/ComputerContext";
import { useContext } from "react";

export const ComputerItem = ({ computer }) => {
  const { openModalDelete, openModalEdit } = useContext(ComputerContext);

  return (
    <ComputerItemStyled>
      <div className="item-content">
        <h3 className="item-content-serialname">
          Serial Number: {computer.serial_name}{" "}
        </h3>
        <h3 className="item-content-hostname">
          Hostname: {computer.host_name}{" "}
        </h3>
        <h3 className="item-content-fixdate">
          Data de reparo: {computer.fix_date}{" "}
        </h3>
        <p className="item-content-description">
          Descrição: {computer.description}{" "}
        </p>
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
