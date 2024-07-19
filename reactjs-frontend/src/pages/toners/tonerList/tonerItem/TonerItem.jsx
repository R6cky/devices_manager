import { useContext, useState } from "react";
import { TonerContext } from "../../../../context/TonerContext";
import { TonerItemStyled } from "./Styled";

export const TonerItem = ({ toner }) => {
  const { openModalEdit, openModalDelete, updateToner } =
    useContext(TonerContext);

  return (
    <TonerItemStyled>
      <div
        className="item-content"
        style={{
          backgroundColor:
            toner.quantity <= 2 && toner.quantity > 0
              ? "yellow"
              : toner.quantity == 0
              ? "red"
              : "green",
        }}
      >
        <h3> {toner.model} </h3>
        <span className="toner-quant"> {toner.quantity} </span>
      </div>

      <div className="item-buttons">
        <button onClick={() => openModalEdit(toner)} className="edit">
          Editar
        </button>
        <button onClick={() => openModalDelete(toner.id)} className="remove">
          remover
        </button>
      </div>
    </TonerItemStyled>
  );
};
