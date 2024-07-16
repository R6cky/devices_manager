import { useContext } from "react";
import { ModalBluebirdEditStyle } from "./Styled";
import { BluebirdContext } from "../../../context/BluebirdContext";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    serial_number: yup.string().required("Campo obrigatório"),
    hostname: yup.string().required("Campo obrigatório"),
    sector: yup.string().required("Campo obrigatório"),
    contact_number: yup.string().required("Campo obrigatório"),
  })
  .required();

export const ModalBluebirdEdit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { updateBluebird, setModalEditIsOpen } = useContext(BluebirdContext);

  const dataBluebird = JSON.parse(localStorage.getItem("dataBluebird"));
  const idBluebird = dataBluebird.id;

  const submit = (data) => {
    updateBluebird(data, idBluebird);
  };

  return (
    <ModalBluebirdEditStyle>
      <form action="" className="form-bluebird" onSubmit={handleSubmit(submit)}>
        <div className="btn-close">
          <span onClick={() => setModalEditIsOpen(false)}>X</span>
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Serial number"
            defaultValue={dataBluebird.serial_number}
            {...register("serial_number")}
          />
          <p className="error-msg">{errors.serial_number?.message}</p>
          <input
            type="text"
            placeholder="Hostname"
            defaultValue={dataBluebird.hostname}
            {...register("hostname")}
          />
          <p className="error-msg">{errors.hostname?.message}</p>
          <input
            type="date"
            placeholder="Setor"
            defaultValue={dataBluebird.sector}
            {...register("sector")}
          />
          <p className="error-msg">{errors.sector?.message}</p>
          <input
            className="contact_number"
            type="text"
            placeholder="Contato do coordenador"
            defaultValue={dataBluebird.contact_number}
            {...register("contact_number")}
          />
          <p className="error-msg">{errors.contact_number?.message}</p>
          <input type="submit" className="btn-send" value={"Enviar"} />
        </div>
      </form>
    </ModalBluebirdEditStyle>
  );
};
