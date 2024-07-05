import { useContext } from "react";
import { ModalComputerEditStyle } from "./Styled";
import { ComputerContext } from "../../../context/ComputerContext";

export const ModalComputerEdit = () => {
  const { updateComputer, setModalEditIsOpen } = useContext(ComputerContext);

  const dataComputer = JSON.parse(localStorage.getItem("dataComputer"));
  const idComputer = dataComputer.id;

  let data = {
    hostname: "",
    ip: "",
    sector: "",
    operational_system: "",
    type: "",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateComputer(data, idComputer);
  };

  return (
    <ModalComputerEditStyle>
      <form action="" className="form-computer" onSubmit={handleSubmit}>
        <div className="btn-close">
          <span onClick={() => setModalEditIsOpen(false)}>X</span>
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="hostname"
            defaultValue={dataComputer.hostname}
            onChange={(e) => {
              data = { ...dataComputer, hostname: e.target.value };
            }}
          />
          <input
            type="text"
            placeholder="Ip do computador"
            defaultValue={dataComputer.ip}
            onChange={(e) => {
              data = { ...dataComputer, ip: e.target.value };
            }}
          />
          <input
            type="text"
            placeholder="Setor"
            defaultValue={dataComputer.sector}
            onChange={(e) => {
              data = { ...dataComputer, sector: e.target.value };
            }}
          />
          <input
            type="text"
            placeholder="os"
            defaultValue={dataComputer.operational_system}
            onChange={(e) => {
              data = { ...dataComputer, operational_system: e.target.value };
            }}
          />
          <input
            type="text"
            placeholder="Tipo"
            defaultValue={dataComputer.type}
            onChange={(e) => {
              data = { ...dataComputer, type: e.target.value };
            }}
          />
          <input type="submit" className="btn-send" value={"Enviar"} />
        </div>
      </form>
    </ModalComputerEditStyle>
  );
};
