import { useContext } from "react";
import { ComputerContext } from "../../../../context/ComputerContext";
import { ComputerItemStyled } from "./Styled";

export const ComputerItem = ({ computer }) => {
  const { setIdInLocalStorage, deleteComputer } = useContext(ComputerContext);

  return (
    <ComputerItemStyled>
      <div className="item-content">
        <h3>Hostname: {computer.hostname} </h3>
        <h3>IP: {computer.ip} </h3>
        <h3>Setor: {computer.sector} </h3>
        <h3>Sistema Operacional: {computer.operational_system} </h3>
        <h3>Tipo: {computer.type} </h3>
      </div>
      <div className="item-buttons">
        <button
          onClick={() => setIdInLocalStorage(computer.id)}
          className="edit"
        >
          Editar
        </button>
        <button onClick={() => deleteComputer(computer.id)} className="remove">
          remover
        </button>
      </div>
    </ComputerItemStyled>
  );
};
