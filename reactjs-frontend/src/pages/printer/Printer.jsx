import { useContext } from "react";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { PrinterStyled } from "./Styled";
import { PrinterList } from "./PrinterList/PrinterList";
import { ModalPrinterCreate } from "../../modals/Printer/modalPrinterCreate/ModalPrinterCreate";
import { ModalPrinterEdit } from "../../modals/Printer/modalPrinterdEdit/ModalPrinterEdit";
import { ModalPrinterDelete } from "../../modals/Printer/modalPrinterDelete/ModalPrinterDelete";
import { PrinterContext } from "../../context/PrinterContext";

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
