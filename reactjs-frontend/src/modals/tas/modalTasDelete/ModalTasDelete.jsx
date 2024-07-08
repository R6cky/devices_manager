import { useContext } from "react";
import { TasContext } from "../../../context/TasContext";
import { ModalTasDeleteStyle } from "./Styled";

export const ModalTasDelete = () => {
  const { deleteTas, setModalDeleteIsOpen } = useContext(TasContext);

  const idPrint = localStorage.getItem("idTas");

  return (
    <ModalTasDeleteStyle>
      <div className="container">
        <div className="btn-close-container">
          <span
            className="btn-close"
            onClick={() => setModalDeleteIsOpen(false)}
          >
            X
          </span>
        </div>
        <p className="question-print">Deseja realmente excluir a impressora?</p>
        <div className="btn-container">
          <span className="btn-yes" onClick={() => deleteTas(idPrint)}>
            Sim
          </span>
          <span className="btn-no" onClick={() => setModalDeleteIsOpen(false)}>
            Não
          </span>
        </div>
      </div>
    </ModalTasDeleteStyle>
  );
};
