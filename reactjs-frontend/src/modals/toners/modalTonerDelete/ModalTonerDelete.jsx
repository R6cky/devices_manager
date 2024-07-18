import { useContext } from "react";
import { TonerContext } from "../../../context/TonerContext";
import { ModalTonerDeleteStyle } from "./Styled";

export const ModalTonerDelete = () => {
  const { deleteToner, setModalDeleteIsOpen } = useContext(TonerContext);

  const idToner = localStorage.getItem("idToner");

  return (
    <ModalTonerDeleteStyle>
      <div className="container">
        <div className="btn-close-container">
          <span
            className="btn-close"
            onClick={() => setModalDeleteIsOpen(false)}
          >
            X
          </span>
        </div>
        <p className="question-print">Deseja realmente excluir o toner?</p>
        <div className="btn-container">
          <span className="btn-yes" onClick={() => deleteToner(idToner)}>
            Sim
          </span>
          <span className="btn-no" onClick={() => setModalDeleteIsOpen(false)}>
            Não
          </span>
        </div>
      </div>
    </ModalTonerDeleteStyle>
  );
};
