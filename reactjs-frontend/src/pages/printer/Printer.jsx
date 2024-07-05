import { useContext } from "react";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { ComputerStyled } from "./Styled";
import { ComputerContext } from "../../context/ComputerContext";
import { ComputerList } from "./computerList/ComputerList";
import { ModalComputerCreate } from "../../modals/computer/modalComputerCreate/ModalComputerCreate";
import { ModalComputerEdit } from "../../modals/computer/modalComputerdEdit/ModalComputerEdit";
import { ModalComputerDelete } from "../../modals/computer/modalComputerDelete/ModalComputerDelete";

export const Computer = () => {
  const {
    modalCreateIsOpen,
    modalEditIsOpen,
    setModalCreateIsOpen,
    modalDeleteIsOpen,
  } = useContext(ComputerContext);

  return (
    <ComputerStyled>
      <Header />
      <div className="btn-container">
        <span className="btn-insert" onClick={() => setModalCreateIsOpen(true)}>
          Inserir Computador
        </span>
      </div>
      <ComputerList />
      <Footer />
      {modalCreateIsOpen ? <ModalComputerCreate /> : null}
      {modalDeleteIsOpen ? <ModalComputerDelete /> : null}
      {modalEditIsOpen ? <ModalComputerEdit /> : null}
    </ComputerStyled>
  );
};
