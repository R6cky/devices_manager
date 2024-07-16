import { useContext } from "react";
import { BluebirdContext } from "../../../context/BluebirdContext";
import { ModalBluebirdStyle } from "./Styled";

export const ModalBluebird = () => {
  const { createBluebird, setModalCreateIsOpen } = useContext(BluebirdContext);

  const data = {
    serial_number: "",
    hostname: "",
    sector: "",
    owner: "",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBluebird(data);
  };

  return (
    <ModalBluebirdStyle>
      <form action="" className="form-bluebird" onSubmit={handleSubmit}>
        <div className="btn-close">
          <span onClick={() => setModalCreateIsOpen(false)}>X</span>
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Serial number"
            onChange={(e) => {
              data.serial_number = e.target.value;
            }}
          />
          <input
            type="text"
            placeholder="Hostname"
            onChange={(e) => {
              data.hostname = e.target.value;
            }}
          />
          <input
            type="date"
            placeholder="Data do reparo"
            onChange={(e) => {
              data.sector = e.target.value;
            }}
          />
          <textarea
            className="textarea-description"
            type="text-area"
            placeholder="Descrição"
            onChange={(e) => {
              data.owner = e.target.value;
            }}
          />
          <input type="submit" className="btn-send" value={"Enviar"} />
        </div>
      </form>
    </ModalBluebirdStyle>
  );
};
