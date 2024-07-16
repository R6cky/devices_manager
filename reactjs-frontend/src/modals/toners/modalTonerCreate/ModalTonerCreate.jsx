import { useContext } from "react";
import { ModalTonerStyle } from "./Styled";
import { TonerContext } from "../../../context/TonerContext";

export const ModalTonerCreate = () => {
  const { createToner, setModalCreateIsOpen } = useContext(TonerContext);

  const data = {
    model: "",
    quantity: 0,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createToner(data);
  };

  return (
    <ModalTonerStyle>
      <form action="" className="form-toner" onSubmit={handleSubmit}>
        <div className="btn-close">
          <span onClick={() => setModalCreateIsOpen(false)}>X</span>
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Modelo"
            onChange={(e) => {
              data.model = e.target.value;
            }}
          />
          <input
            type="text"
            placeholder="Quantidade"
            onChange={(e) => {
              data.quantity = e.target.value;
            }}
          />

          <input type="submit" className="btn-send" value={"Enviar"} />
        </div>
      </form>
    </ModalTonerStyle>
  );
};
