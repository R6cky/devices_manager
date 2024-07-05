import { useContext } from "react";
import { ComputerContext } from "../../../context/ComputerContext";
import { ModalComputerDeleteStyle } from "./Styled";

export const ModalComputerDelete = () => {
  const { deleteComputer, setModalDeleteIsOpen } = useContext(ComputerContext);

  const idComputer = localStorage.getItem("idComputer");

  return (
    <ModalComputerDeleteStyle>
      <div className="container">
        <div className="btn-close-container">
          <span
            className="btn-close"
            onClick={() => setModalDeleteIsOpen(false)}
          >
            X
          </span>
        </div>
        <p className="question-computer">
          Deseja realmente excluir o Computador?
        </p>
        <div className="btn-container">
          <span className="btn-yes" onClick={() => deleteComputer(idComputer)}>
            Sim
          </span>
          <span className="btn-no" onClick={() => setModalDeleteIsOpen(false)}>
            Não
          </span>
        </div>
      </div>
    </ModalComputerDeleteStyle>
  );
};
