import { useContext, useEffect } from "react";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { PrinterStyled } from "./Styled";
import { PrinterContext } from "../../context/PrinterContext";
import { PrinterList } from "./printerList/PrinterList";
import { ModalPrinterCreate } from "../../modals/printer/modalPrinterCreate/ModalPrinterCreate";
import { ModalPrinterEdit } from "../../modals/printer/modalPrinterdEdit/ModalPrinterEdit";
import { ModalPrinterDelete } from "../../modals/printer/modalPrinterDelete/ModalPrinterDelete";

export const Printer = () => {
  const {
    modalCreateIsOpen,
    modalEditIsOpen,
    setModalCreateIsOpen,
    modalDeleteIsOpen,
  } = useContext(PrinterContext);

  return (
    <PrinterStyled>
      <Header />
      <div className="btn-container">
        <span className="btn-insert" onClick={() => setModalCreateIsOpen(true)}>
          Inserir Impressora
        </span>
      </div>
      <PrinterList />
      <Footer />
      {modalCreateIsOpen ? <ModalPrinterCreate /> : null}
      {modalDeleteIsOpen ? <ModalPrinterDelete /> : null}
      {modalEditIsOpen ? <ModalPrinterEdit /> : null}
    </PrinterStyled>
  );
};
