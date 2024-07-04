import { useContext } from "react";
import { ComputerContext } from "../../../context/ComputerContext";
import { ModalComputerStyle } from "./Styled";

export const ModalComputer = () => {
  const { createComputer, setModalCreateIsOpen } = useContext(ComputerContext);

  const data = {
    hostname: "",
    ip: "",
    sector: "",
    operational_system: "",
    type: "",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createComputer(data);
  };

  return (
    <ModalComputerStyle>
      <form action="" className="form-Computer" onSubmit={handleSubmit}>
        <div className="btn-close">
          <span onClick={() => setModalCreateIsOpen(false)}>X</span>
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Serial number"
            onChange={(e) => {
              data.hostname = e.target.value;
            }}
          />
          <input
            type="text"
            placeholder="Hostname"
            onChange={(e) => {
              data.ip = e.target.value;
            }}
          />
          <input
            type="text"
            placeholder="Setor"
            onChange={(e) => {
              data.sector = e.target.value;
            }}
          />
          <input
            type="text"
            placeholder="Sistema operacional"
            onChange={(e) => {
              data.operational_system = e.target.value;
            }}
          />
          <input type="submit" className="btn-send" value={"Enviar"} />
        </div>
      </form>
    </ModalComputerStyle>
  );
};
