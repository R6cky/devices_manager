import { useContext } from "react";
import { TonerContext } from "../../../../context/TonerContext";
import { TonerItemStyled } from "./Styled";

export const TonerItem = ({ toner }) => {
  const { openModalEdit, openModalDelete } = useContext(TonerContext);

  return (
    <TonerItemStyled>
      <div className="item-content">
        <h3> {toner.model} </h3>
        <span>Quantidade: {toner.quantity} </span>
      </div>
      <div className="item-buttons">
        <button onClick={() => openModalEdit(toner)} className="add">
          +
        </button>
        <button onClick={() => openModalDelete(toner.id)} className="remove">
          -
        </button>
      </div>
      <span className="btn-remove">remove</span>
    </TonerItemStyled>
  );
};
