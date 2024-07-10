import { useContext } from "react";
import { TasContext } from "../../../../context/TasContext";
import { TasItemStyled } from "./Styled";

export const TasItem = ({ tas }) => {
  const { openModalEdit, openModalDelete } = useContext(TasContext);

  return (
    <TasItemStyled>
      <div className="item-content">
        <h3>Hostname: {tas.hostname} </h3>
        <h3>Wifi: {tas.wifi_name} </h3>
      </div>
      <div className="item-buttons">
        <button onClick={() => openModalEdit(tas)} className="edit">
          Editar
        </button>
        <button onClick={() => openModalDelete(tas.id)} className="remove">
          remover
        </button>
      </div>
    </TasItemStyled>
  );
};
