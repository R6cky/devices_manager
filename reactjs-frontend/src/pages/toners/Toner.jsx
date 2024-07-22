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
  const {
    setModalCreateIsOpen,
    modalDeleteIsOpen,
    modalEditIsOpen,
    modalCreateIsOpen,
    inputVoid,
    findToner,
  } = useContext(TonerContext);

  return (
    <TonerStyled>
      <Header />
      <div className="btn-container">
        <span className="btn-insert" onClick={() => setModalCreateIsOpen(true)}>
          Inserir Toner
        </span>
        <input
          className="search"
          onChange={(e) => inputVoid(e.target.value)}
          onChangeCapture={(e) => findToner(e.target.value)}
          type="text"
          placeholder="Pesquisar"
        />
      </div>

      <TonerList />
      <Footer />
      {modalCreateIsOpen ? <ModalTonerCreate /> : null}
      {modalDeleteIsOpen ? <ModalTonerDelete /> : null}
      {modalEditIsOpen ? <ModalTonerEdit /> : null}
    </TonerStyled>
  );
};
