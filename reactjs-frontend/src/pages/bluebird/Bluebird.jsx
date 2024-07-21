import { useContext } from "react";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { BluebirdStyled } from "./Styled";
import { BluebirdList } from "./bluebirdList/BluebirdList";
import { BluebirdContext } from "../../context/BluebirdContext";
import { ModalBluebird } from "../../modals/bluebird/modalBlueBirdCreate/ModalBluebirdCreate";
import { ModalBluebirdDelete } from "../../modals/bluebird/modalBluebirdDelete/ModalBluebirdDelete";
import { ModalBluebirdEdit } from "../../modals/bluebird/modalBluebirdEdit/ModalBluebirdEdit";

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
          onInput={(e) => inputVoid(e.target.value)}
          onChangeCapture={(e) => findBluebird(e.target.value)}
          type="text"
          placeholder="Pesquisar"
        />
        <button className="btn-search" onClick={(e) => console.log(e.target)}>
          Pesquisar
        </button>
      </div>
      <BluebirdList />
      <Footer />
      {modalCreateIsOpen ? <ModalBluebird /> : null}
      {modalDeleteIsOpen ? <ModalBluebirdDelete /> : null}
      {modalEditIsOpen ? <ModalBluebirdEdit /> : null}
    </BluebirdStyled>
  );
};
