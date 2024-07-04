import { useContext } from "react";
import { ModalBluebirdEditStyle } from "./Styled";
import { BluebirdContext } from "../../../context/BluebirdContext";

export const ModalBluebirdEdit = () => {
  const { updateBluebird, setModalEditIsOpen } = useContext(BluebirdContext);

  const dataBluebird = JSON.parse(localStorage.getItem("dataBluebird"));
  const idBluebird = dataBluebird.id;

  console.log(dataBluebird);

  const data = {
    serial_name: "",
    host_name: "",
    data_reparo: "",
    fix_date: "",
    description: "",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBluebird(data, idBluebird);
  };

  return (
    <ModalBluebirdEditStyle>
      <form action="" className="form-bluebird" onSubmit={handleSubmit}>
        <div className="btn-close">
          <span onClick={() => setModalEditIsOpen(false)}>X</span>
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Serial number"
            defaultValue={dataBluebird.serial_name}
            onChange={(e) => {
              data.serial_name = e.target.value;
            }}
          />
          <input
            type="text"
            placeholder="Hostname"
            defaultValue={dataBluebird.host_name}
            onChange={(e) => {
              data.host_name = e.target.value;
            }}
          />
          <input
            type="date"
            placeholder="Data do reparo"
            defaultValue={dataBluebird.fix_date}
            onChange={(e) => {
              data.fix_date = e.target.value;
            }}
          />
          <input
            type="text-area"
            placeholder="Descrição"
            defaultValue={dataBluebird.description}
            onChange={(e) => {
              data.description = e.target.value;
            }}
          />
          <input type="submit" className="btn-send" value={"Enviar"} />
        </div>
      </form>
    </ModalBluebirdEditStyle>
  );
};
