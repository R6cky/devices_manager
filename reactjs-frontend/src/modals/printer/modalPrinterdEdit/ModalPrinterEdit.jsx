import { useContext } from "react";
import { ModalPrinterEditStyle } from "./Styled";
import { PrinterContext } from "../../../context/PrinterContext";

export const ModalPrinterEdit = () => {
  const { updatePrinter, setModalEditIsOpen } = useContext(PrinterContext);

  const dataPrinter = JSON.parse(localStorage.getItem("dataPrinter"));
  const idPrinter = dataPrinter.id;

  let data = {
    hostname: "",
    ip: "",
    brand_and_model: "",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePrinter(data, idPrinter);
  };

  return (
    <ModalPrinterEditStyle>
      <form action="" className="form-printer" onSubmit={handleSubmit}>
        <div className="btn-close">
          <span onClick={() => setModalEditIsOpen(false)}>X</span>
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="hostname"
            defaultValue={dataPrinter.hostname}
            onChange={(e) => {
              data = { ...dataPrinter, hostname: e.target.value };
            }}
          />
          <input
            type="text"
            placeholder="Ip do computador"
            defaultValue={dataPrinter.ip}
            onChange={(e) => {
              data = { ...dataPrinter, ip: e.target.value };
            }}
          />

          <input
            type="text"
            placeholder="Marca e Modelo"
            defaultValue={dataPrinter.brand_and_model}
            onChange={(e) => {
              data = { ...dataPrinter, brand_and_model: e.target.value };
            }}
          />
          <input type="submit" className="btn-send" value={"Enviar"} />
        </div>
      </form>
    </ModalPrinterEditStyle>
  );
};
