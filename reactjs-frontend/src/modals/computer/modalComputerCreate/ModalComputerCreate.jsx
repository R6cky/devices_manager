import { useContext } from "react";
import { ModalComputerStyle } from "./Styled";
import { ComputerContext } from "../../../context/ComputerContext";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
const schema = yup
  .object({
    hostname: yup.string().required("Campo obrigatório"),
    ip: yup.string().required("Campo obrigatório"),
    sector: yup.string().required("Campo obrigatório"),
    operational_system: yup.string().required("Campo obrigatório"),
    type: yup.string().required("Campo obrigatório"),
  })
  .required();

export const ModalComputerCreate = () => {
  const { createComputer, setModalCreateIsOpen } = useContext(ComputerContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = (data) => {
    createComputer(data);
  };

  return (
    <ModalComputerStyle>
      <form action="" className="form-computer" onSubmit={handleSubmit(submit)}>
        <div className="btn-close">
          <span onClick={() => setModalCreateIsOpen(false)}>X</span>
        </div>
        <div className="input-container">
          <input type="text" placeholder="Hostname" {...register("hostname")} />
          <p className="error-msg">{errors.hostname?.message}</p>
          <input
            type="text"
            placeholder="IP do computador"
            {...register("ip")}
          />
          <p className="error-msg">{errors.ip?.message}</p>

          <input type="text" placeholder="Setor" {...register("sector")} />
          <p className="error-msg">{errors.sector?.message}</p>

          <select
            title="Selecione o sistema operacional"
            name="operational_system"
            className="operational_system"
            defaultValue={"Windows 11"}
            {...register("operational_system")}
          >
            <option value="Windows 11">Windows 11</option>
            <option value="Windows 10">Windows 10</option>
          </select>

          <select
            name=""
            id=""
            title="Tipo - Notebook ou Desktop"
            defaultValue={"Desktop"}
            {...register("type")}
          >
            <option value="Desktop">Desktop</option>
            <option value="Notebook">Notebook</option>
          </select>
          <input type="submit" className="btn-send" value={"Enviar"} />
        </div>
      </form>
    </ModalComputerStyle>
  );
};
