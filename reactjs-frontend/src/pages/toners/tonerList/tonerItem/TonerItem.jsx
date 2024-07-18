import { useContext, useState } from "react";
import { TonerContext } from "../../../../context/TonerContext";
import { TonerItemStyled } from "./Styled";

export const TonerItem = ({ toner }) => {
  const { openModalEdit, openModalDelete, updateToner } =
    useContext(TonerContext);

  const [tonerQuant, setTonerQuant] = useState(toner.quantity);

  return (
    <TonerItemStyled>
      <div className="item-content">
        <h3> {toner.model} </h3>
        <span>Quantidade: {tonerQuant} </span>
      </div>
      <div className="item-buttons">
        <button
          onClick={() => setTonerQuant(toner.quantity + 1)}
          className="add"
        >
          +
        </button>
        <button
          onClick={() =>
            setTonerQuant(toner.quantity > 0 ? toner.quantity - 1 : 0)
          }
          className="remove"
        >
          -
        </button>
      </div>
      <div className="remove-edit-container">
        <span onClick={() => openModalEdit(toner)} className="btn-remove">
          Editar
        </span>
        <span onClick={() => openModalDelete(toner.id)} className="btn-remove">
          Remover
        </span>
      </div>
    </TonerItemStyled>
  );
};
