import { BluebirdItemStyled } from "./Styled";
import { BluebirdContext } from "../../../../context/BluebirdContext";
import { useContext } from "react";

export const BluebirdItem = ({ bluebird }) => {
  const { openModalDelete, openModalEdit } = useContext(BluebirdContext);

  return (
    <BluebirdItemStyled>
      <div className="item-content">
        <h3 className="item-content-serialname">
          Serial Number: {bluebird.serial_number}
        </h3>
        <h3 className="item-content-hostname">Hostname: {bluebird.hostname}</h3>
        <h3 className="item-content-fixdate">
          Data de reparo: {bluebird.sector}
        </h3>
        <p className="item-content-description">
          Descrição: {bluebird.contact_number}
        </p>
      </div>
      <div className="item-buttons">
        <button onClick={() => openModalEdit(bluebird)} className="edit">
          Editar
        </button>
        <button onClick={() => openModalDelete(bluebird.id)} className="remove">
          remover
        </button>
      </div>
    </BluebirdItemStyled>
  );
};
