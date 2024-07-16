import { useContext } from "react";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { TonerContext } from "../../context/TonerContext";
import { TonerStyled } from "./Styled";
import { TonerList } from "./tonerList/TonerList";
import { ModalTonerEdit } from "../../modals/toners/modalTonerEdit/ModalTonerEdit";
import { ModalTonerDelete } from "../../modals/toners/modalTonerDelete/ModalTonerDelete";
import { ModalTonerCreate } from "../../modals/toners/modalTonerCreate/ModalTonerCreate";

export const Toner = () => {
  const { setModalCreateIsOpen, modalDeleteIsOpen, modalEditIsOpen } =
    useContext(TonerContext);

  return (
    <TonerStyled>
      <Header />
      <div className="btn-container">
        <span className="btn-insert" onClick={() => setModalCreateIsOpen(true)}>
          Inserir Toner
        </span>
      </div>

      <TonerList />
      <Footer />
      {setModalCreateIsOpen ? <ModalTonerCreate /> : null}
      {modalDeleteIsOpen ? <ModalTonerDelete /> : null}
      {modalEditIsOpen ? <ModalTonerEdit /> : null}
    </TonerStyled>
  );
};
