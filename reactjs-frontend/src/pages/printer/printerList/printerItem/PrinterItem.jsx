import { PrinterItemStyled } from "./Styled";
import { PrinterContext } from "../../../../context/PrinterContext";
import { useContext } from "react";

export const PrinterItem = ({ printer }) => {
  const { openModalDelete, openModalEdit } = useContext(PrinterContext);

  return (
    <PrinterItemStyled>
      <div className="item-content">
        <h3 className="item-content-hostname" title={printer.hostname}>
          Hostname: {printer.hostname}
        </h3>
        <h3 className="item-content-ip" title={printer.ip}>
          IP: {printer.ip}
        </h3>
        <h3 className="item-brand-and-model" title={printer.brand_and_model}>
          Marca e Modelo: {printer.brand_and_model}
        </h3>
        <h3 className="item-queue-name" title={printer.queue_name}>
          Nome da fila: {printer.queue_name}
        </h3>
        <h3 className="item-toner-name" title={printer.toner_name}>
          Toner: {printer.toner_name}
        </h3>

        <h3 className="item-sector" title={printer.sector}>
          Setor: {printer.sector}
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
