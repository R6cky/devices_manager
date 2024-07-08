import { useContext } from "react";
import { ModalTasStyle } from "./Styled";
import { TasContext } from "../../../context/TasContext";

export const ModalTasCreate = () => {
  const { createTas, setModalCreateIsOpen } = useContext(TasContext);

  const data = {
    hostname: "",
    ip: "",
    brand_and_model: "",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTas(data);
  };

  return (
    <ModalTasStyle>
      <form action="" className="form-tas" onSubmit={handleSubmit}>
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
    </ModalTasStyle>
  );
};