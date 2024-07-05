import { useContext } from "react";
import { ModalPrinterStyle } from "./Styled";
import { PrinterContext } from "../../../context/PrinterContext";

export const ModalPrinterCreate = () => {
  const { createPrinter, setModalCreateIsOpen } = useContext(PrinterContext);

  const data = {
    hostname: "",
    ip: "",
    brand_and_model: "",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPrinter(data);
  };

  return (
    <ModalPrinterStyle>
      <form action="" className="form-Printer" onSubmit={handleSubmit}>
        <div className="btn-close">
          <span onClick={() => setModalCreateIsOpen(false)}>X</span>
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Hostname"
            onChange={(e) => {
              data.hostname = e.target.value;
            }}
          />
          <input
            type="text"
            placeholder="IP do computador"
            onChange={(e) => {
              data.ip = e.target.value;
            }}
          />
          <input
            type="text"
            placeholder="Marca e modelo"
            onChange={(e) => {
              data.brand_and_model = e.target.value;
            }}
          />
          <input type="submit" className="btn-send" value={"Enviar"} />
        </div>
      </form>
    </ModalPrinterStyle>
  );
};
