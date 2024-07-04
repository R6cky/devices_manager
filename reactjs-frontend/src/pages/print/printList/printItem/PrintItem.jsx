import { useContext } from "react";
import { PrintContext } from "../../../../context/PrintContext";
import { PrintItemStyled } from "./Styled";

export const PrintItem = ({ print }) => {
  const { setIdInLocalStorage, deletePrint } = useContext(PrintContext);

  return (
    <PrintItemStyled>
      <div className="item-content">
        <h3>Hostname: {print.hostname} </h3>
        <h3>IP: {print.ip} </h3>
        <h3>Marca e Modelo: {print.brand_and_model} </h3>
      </div>
      <div className="item-buttons">
        <button onClick={() => setIdInLocalStorage(print.id)} className="edit">
          Editar
        </button>
        <button onClick={() => deletePrint(print.id)} className="remove">
          remover
        </button>
      </div>
    </PrintItemStyled>
  );
};
