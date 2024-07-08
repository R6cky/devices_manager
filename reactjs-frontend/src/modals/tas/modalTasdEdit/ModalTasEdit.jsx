import { useContext } from "react";
import { ModalTasEditStyle } from "./Styled";
import { TasContext } from "../../../context/TasContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup
  .object({
    hostname: yup.string().required(),
    ip: yup.string().required(),
    brand_and_model: yup.string().required(),
  })
  .required();

export const ModalTasEdit = () => {
  const { updateTas, setModalEditIsOpen } = useContext(TasContext);

  const dataTas = JSON.parse(localStorage.getItem("dataTas"));
  const idTas = dataTas.id;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = (data) => {
    updateTas(data, idTas);
  };

  return (
    <ModalTasEditStyle>
      <form action="" className="form-tas" onSubmit={handleSubmit(submit)}>
        <div className="btn-close">
          <span onClick={() => setModalEditIsOpen(false)}>X</span>
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="hostname"
            defaultValue={dataTas.hostname}
            {...register("hostname")}
          />
          <p className="error-msg">{errors.hostname?.message}</p>
          <input
            type="text"
            placeholder="Ip do computador"
            defaultValue={dataTas.ip}
            {...register("ip")}
          />
          <p className="error-msg">{errors.ip?.message}</p>
          <input
            type="text"
            placeholder="Marca e Modelo"
            defaultValue={dataTas.brand_and_model}
            {...register("brand_and_model")}
          />
          <p className="error-msg">{errors.brand_and_model?.message}</p>
          <input type="submit" className="btn-send" value={"Enviar"} />
        </div>
      </form>
    </ModalTasEditStyle>
  );
};
