import { useContext } from "react";
import { BluebirdContext } from "../../../context/BluebirdContext";
import { ModalBluebirdStyle } from "./Styled";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    serial_number: yup.string().required("Campo obrigatírio"),
    hostname: yup.string().required("Campo obrigatírio"),
    sector: yup.string().required("Campo obrigatírio"),
    contact_number: yup.string().required("Campo obrigatírio"),
  })
  .required();

export const ModalBluebird = () => {
  const { createBluebird, setModalCreateIsOpen } = useContext(BluebirdContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = (data) => {
    createBluebird(data);
  };

  return (
    <ModalBluebirdStyle>
      <form action="" className="form-bluebird" onSubmit={handleSubmit(submit)}>
        <div className="btn-close">
          <span onClick={() => setModalCreateIsOpen(false)}>X</span>
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Serial number"
            {...register("serial_number")}
          />
          <p className="error-msg">{errors.serial_number?.message}</p>

          <input type="text" placeholder="Hostname" {...register("hostname")} />
          <p className="error-msg">{errors.hostname?.message}</p>
          <input type="text" placeholder="Setor" {...register("sector")} />
          <p className="error-msg">{errors.sector?.message} </p>
          <input
            type="text"
            placeholder="Contato do coordenador"
            {...register("contact_number")}
          />
          <p className="error-msg">{errors.contact_number?.message}</p>
          <input type="submit" className="btn-send" value={"Enviar"} />
        </div>
      </form>
    </ModalBluebirdStyle>
  );
};
