import { useContext } from "react";
import { Header } from "../../components/header/Header";
import { TasStyled } from "./Styled";
import { TasList } from "./tasList/TasList";
import { TasContext } from "../../context/TasContext";
import { ModalTasCreate } from "../../modals/tas/modalTasCreate/ModalTasCreate";
import { ModalTasEdit } from "../../modals/tas/modalTasdEdit/ModalTasEdit";
import { ModalTasDelete } from "../../modals/tas/modalTasDelete/ModalTasDelete";

export const Tas = () => {
  const {
    modalCreateIsOpen,
    setModalCreateIsOpen,
    modalDeleteIsOpen,
    modalEditIsOpen,
  } = useContext(TasContext);
  return (
    <TasStyled>
      <Header />
      <div className="btn-container">
        <span className="btn-insert" onClick={() => setModalCreateIsOpen(true)}>
          Inserir Impressora
        </span>
      </div>
      <TasList />
      {modalCreateIsOpen ? <ModalTasCreate /> : null}
      {modalDeleteIsOpen ? <ModalTasDelete /> : null}
      {modalEditIsOpen ? <ModalTasEdit /> : null}
    </TasStyled>
  );
};
