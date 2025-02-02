import { useContext } from "react";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { BluebirdStyled } from "./Styled";
import { BluebirdList } from "./bluebirdList/BluebirdList";
import { BluebirdContext } from "../../context/BluebirdContext";
import { ModalBluebird } from "../../modals/bluebird/modalBlueBirdCreate/ModalBluebirdCreate";
import { ModalBluebirdDelete } from "../../modals/bluebird/modalBluebirdDelete/ModalBluebirdDelete";
import { ModalBluebirdEdit } from "../../modals/bluebird/modalBluebirdEdit/ModalBluebirdEdit";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Bluebird = () => {
  const {
    modalCreateIsOpen,
    modalEditIsOpen,
    setModalCreateIsOpen,
    modalDeleteIsOpen,
    findBluebird,
    inputVoid,
  } = useContext(BluebirdContext);

  return (
    <BluebirdStyled>
      <Header />
      <div className="btn-container">
        <span className="btn-insert" onClick={() => setModalCreateIsOpen(true)}>
          Inserir bluebird
        </span>
        <input
          className="search"
          onChange={(e) => inputVoid(e.target.value)}
          onChangeCapture={(e) => findBluebird(e.target.value)}
          type="text"
          placeholder="Hostname | Serial Number"
        />
        <ToastContainer />
      </div>

      <BluebirdList />
      <Footer />
      {modalCreateIsOpen ? <ModalBluebird /> : null}
      {modalDeleteIsOpen ? <ModalBluebirdDelete /> : null}
      {modalEditIsOpen ? <ModalBluebirdEdit /> : null}
    </BluebirdStyled>
  );
};
