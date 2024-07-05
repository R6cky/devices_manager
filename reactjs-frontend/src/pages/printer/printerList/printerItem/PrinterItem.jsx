import { PrinterItemStyled } from "./Styled";
import { PrinterContext } from "../../../../context/PrinterContext";
import { useContext } from "react";

export const PrinterItem = ({ printer }) => {
  const { openModalDelete, openModalEdit } = useContext(PrinterContext);

  return (
    <PrinterItemStyled>
      <div className="item-content">
        <h3 className="item-content-hostname">Hostname: {printer.hostname}</h3>
        <h3 className="item-content-ip">IP: {printer.ip}</h3>
        <h3 className="item-content-sector">
          Marca e Modelo: {printer.brand_and_model}
        </h3>
      </div>
      <div className="item-buttons">
        <button onClick={() => openModalEdit(printer)} className="edit">
          Editar
        </button>
        <button onClick={() => openModalDelete(printer.id)} className="remove">
          remover
        </button>
      </div>
    </PrinterItemStyled>
  );
};