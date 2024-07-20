import { useContext } from "react";
import { ModalTasEditStyle } from "./Styled";
import { TasContext } from "../../../context/TasContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup
  .object({
    hostname: yup.string().required("Campo obrigatório"),
    wifi_name: yup.string().required("Campo obrigatório"),
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
          <div className="input-container-hostname">
            <input
              type="text"
              placeholder="hostname"
              defaultValue={dataTas.hostname}
              {...register("hostname")}
            />
            <p className="error-msg">{errors.hostname?.message}</p>
          </div>
          <div className="input-container-wifiname">
            <input
              type="text"
              placeholder="Wifi conectado"
              defaultValue={dataTas.wifi_name}
              {...register("wifi_name")}
            />
            <p className="error-msg">{errors.wifi_name?.message}</p>
          </div>

          <input type="submit" className="btn-send" value={"Enviar"} />
        </div>
      </form>
    </ModalTasEditStyle>
  );
};
