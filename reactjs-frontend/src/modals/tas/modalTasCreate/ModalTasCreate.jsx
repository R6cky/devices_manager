import { useContext } from "react";
import { ModalTasStyle } from "./Styled";
import { TasContext } from "../../../context/TasContext";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    hostname: yup.string().required("Campo obrigatório"),
    wifi_name: yup.string().required("Campo obrigatório"),
  })
  .required();

export const ModalTasCreate = () => {
  const { createTas, setModalCreateIsOpen } = useContext(TasContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = (data) => {
    createTas(data);
  };

  return (
    <ModalTasStyle>
      <form action="" className="form-tas" onSubmit={handleSubmit(submit)}>
        <div className="btn-close">
          <span onClick={() => setModalCreateIsOpen(false)}>X</span>
        </div>
        <div className="input-container">
          <input type="text" placeholder="Hostname" {...register("hostname")} />
          <p className="error-msg">{errors.hostname?.message} </p>
          <input
            type="text"
            placeholder="Wifi conectado"
            {...register("wifi_name")}
          />
          <p className="error-msg">{errors.wifi_name?.message}</p>
          <input type="submit" className="btn-send" value={"Enviar"} />
        </div>
      </form>
    </ModalTasStyle>
  );
};
