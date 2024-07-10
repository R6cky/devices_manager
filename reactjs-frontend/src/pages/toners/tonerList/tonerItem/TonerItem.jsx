import { useContext } from "react";
import { TonerContext } from "../../../../context/TonerContext";
import { TonerItemStyled } from "./Styled";

export const TonerItem = ({ toner }) => {
  const { openModalEdit, openModalDelete } = useContext(TonerContext);

  return (
    <TonerItemStyled>
      <div className="item-content">
        <h3> {toner.model} </h3>
        {/* <h3>Entrada ou Saída: {toner.in_out} </h3> */}
      </div>
      <div className="item-buttons">
        <button onClick={() => openModalEdit(toner)} className="edit">
          Incluir toner
        </button>
        <button onClick={() => openModalDelete(toner.id)} className="remove">
          Retirar toner
        </button>
      </div>
    </TonerItemStyled>
  );
};
