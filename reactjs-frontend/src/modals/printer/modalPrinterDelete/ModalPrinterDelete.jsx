import { useContext } from "react";
import { PrinterContext } from "../../../context/PrinterContext";
import { ModalPrinterDeleteStyle } from "./Styled";

export const ModalPrinterDelete = () => {
  const { deletePrinter, setModalDeleteIsOpen } = useContext(PrinterContext);

  const idPrint = localStorage.getItem("idPrint");

  return (
    <ModalPrinterDeleteStyle>
      <div className="container">
        <div className="btn-close">
          <span
            className="btn-close"
            onClick={() => setModalDeleteIsOpen(false)}
          >
            X
          </span>
        </div>
        <p className="question-print">Deseja realmente excluir a impressora?</p>
        <div className="btn-container">
          <span className="btn-yes" onClick={() => deletePrinter(idPrint)}>
            Sim
          </span>
          <span className="btn-no" onClick={() => setModalDeleteIsOpen(false)}>
            Não
          </span>
        </div>
      </div>
    </ModalPrinterDeleteStyle>
  );
};
