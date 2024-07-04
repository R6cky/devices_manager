import { BluebirdItemStyled } from "./Styled";
import { BluebirdContext } from "../../../../context/BluebirdContext";
import { useContext } from "react";

export const BluebirdItem = ({ bluebird }) => {
  const { openModalDelete, openModalEdit } = useContext(BluebirdContext);

  return (
    <BluebirdItemStyled>
      <div className="item-content">
        <h3 className="item-content-serialname">
          Serial Number: {bluebird.serial_name}{" "}
        </h3>
        <h3 className="item-content-hostname">
          Hostname: {bluebird.host_name}{" "}
        </h3>
        <h3 className="item-content-fixdate">
          Data de reparo: {bluebird.fix_date}{" "}
        </h3>
        <p className="item-content-description">
          Descrição: {bluebird.description}{" "}
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
