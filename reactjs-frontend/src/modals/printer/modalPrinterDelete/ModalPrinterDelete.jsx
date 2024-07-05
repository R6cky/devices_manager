import { useContext } from "react";
import { PrintContext } from "../../../context/PrintContext";
import { ModalPrintDeleteStyle } from "./Styled";

export const ModalPrintDelete = () => {
  const { deletePrint, setModalDeleteIsOpen } = useContext(PrintContext);

  const idPrint = localStorage.getItem("idPrint");

  return (
    <ModalPrintDeleteStyle>
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
          <span className="btn-yes" onClick={() => deletePrint(idPrint)}>
            Sim
          </span>
          <span className="btn-no" onClick={() => setModalDeleteIsOpen(false)}>
            Não
          </span>
        </div>
      </div>
    </ModalPrintDeleteStyle>
  );
};
