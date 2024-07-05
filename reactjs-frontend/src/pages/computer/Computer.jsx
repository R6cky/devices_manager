import { useContext } from "react";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { ComputerStyled } from "./Styled";
import { ComputerContext } from "../../context/ComputerContext";
// import { ModalComputerDelete } from "../../modals/Computer/modalComputerDelete/ModalComputerDelete";
// import { ModalComputerEdit } from "../../modals/Computer/modalComputerEdit/ModalComputerEdit";
import { ComputerList } from "./computerList/ComputerList";
import { ModalComputerCreate } from "../../modals/computadores/modalComputerCreate/ModalComputerCreate";

export const Computer = () => {
  const {
    modalCreateIsOpen,
    //modalEditIsOpen,
    setModalCreateIsOpen,
    //modalDeleteIsOpen,
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
      {/* {modalDeleteIsOpen ? <ModalComputerDelete /> : null}
      {modalEditIsOpen ? <ModalComputerEdit /> : null} */}
    </ComputerStyled>
  );
};
