import { BluebirdItemStyled } from "./Styled";
import { BluebirdContext } from "../../../../context/BluebirdContext";
import { useContext } from "react";

export const BluebirdItem = ({ bluebird }) => {
  const { openModalDelete, openModalEdit } = useContext(BluebirdContext);

  return (
    <BluebirdItemStyled>
      <div className="item-content">
        <h3>Serial Number: {bluebird.serial_name} </h3>
        <h3>Hostname: {bluebird.host_name} </h3>
        <h3>Data de reparo: {bluebird.fix_date} </h3>
        <h3>Descrição: {bluebird.description} </h3>
      </div>
      <div className="item-buttons">
        <button
          onClick={() => openModalEdit(bluebird.id, bluebird)}
          className="edit"
        >
          Editar
        </button>
        <button onClick={() => openModalDelete(bluebird.id)} className="remove">
          remover
        </button>
      </div>
    </BluebirdItemStyled>
  );
};
