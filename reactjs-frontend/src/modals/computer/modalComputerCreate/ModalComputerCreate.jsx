import { useContext } from "react";
import { ModalComputerStyle } from "./Styled";
import { ComputerContext } from "../../../context/ComputerContext";

export const ModalComputerCreate = () => {
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
      <form action="" className="form-computer" onSubmit={handleSubmit}>
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
            placeholder="Setor"
            onChange={(e) => {
              data.sector = e.target.value;
            }}
          />
          <select
            title="Selecione o sistema operacional"
            onChange={(e) => {
              data.operational_system = e.target.value;
            }}
            name="operational_system"
            className="operational_system"
            id=""
          >
            <option value="Windows 11">Windows 11</option>
            <option value="Windows 10">Windows 10</option>
          </select>

          <select
            name=""
            id=""
            title="Tipo - Notebook ou Desktop"
            onChange={(e) => {
              data.type = e.target.value;
            }}
          >
            <option value="Desktop">Desktop</option>
            <option value="Notebook">Notebook</option>
          </select>
          <input type="submit" className="btn-send" value={"Enviar"} />
        </div>
      </form>
    </ModalComputerStyle>
  );
};
