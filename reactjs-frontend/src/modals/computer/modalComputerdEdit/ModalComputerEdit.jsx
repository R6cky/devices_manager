import { useContext } from "react";
import { ModalComputerEditStyle } from "./Styled";
import { ComputerContext } from "../../../context/ComputerContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup.object().shape({
  hostname: yup.string().required(),
  ip: yup.string().required(),
  sector: yup.string().required(),
  operational_system: yup.string().required(),
  type: yup.string().required(),
});

export const ModalComputerEdit = () => {
  const { updateComputer, setModalEditIsOpen } = useContext(ComputerContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dataComputer = JSON.parse(localStorage.getItem("dataComputer"));
  const idComputer = dataComputer.id;

  const submit = (data) => {
    updateComputer(data, idComputer);
  };

  return (
    <ModalComputerEditStyle>
      <form action="" className="form-computer" onSubmit={handleSubmit(submit)}>
        <div className="btn-close">
          <span onClick={() => setModalEditIsOpen(false)}>X</span>
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="hostname"
            defaultValue={dataComputer.hostname}
            {...register("hostname")}
          />
          <p className="error-msg">{errors.hostname?.message}</p>
          <input
            type="text"
            placeholder="Ip do computador"
            defaultValue={dataComputer.ip}
            {...register("ip")}
          />
          <p className="error-msg">{errors.ip?.message}</p>
          <input
            type="text"
            placeholder="Setor"
            defaultValue={dataComputer.sector}
            {...register("sector")}
          />
          <p className="error-msg">{errors.sector?.message}</p>
          <select
            title="Selecione o sistema operacional"
            defaultValue={dataComputer.operational_system}
            {...register("operational_system")}
            name="operational_system"
            className="operational_system"
            id=""
          >
            <option value="Windows 11">Windows 11</option>
            <option value="Windows 10">Windows 10</option>
          </select>
          {/* <input
            type="text"
            placeholder="os"
            defaultValue={dataComputer.operational_system}
            {...register("operational_system")}
          /> */}
          <p className="error-msg">{errors.operational_system?.message}</p>

          <select
            name=""
            id=""
            title="Tipo - Notebook ou Desktop"
            defaultValue={dataComputer.type}
            {...register("type")}
          >
            <option value="Desktop">Desktop</option>
            <option value="Notebook">Notebook</option>
          </select>
          <p className="error-msg">{errors.type?.message}</p>
          <input type="submit" className="btn-send" value={"Enviar"} />
        </div>
      </form>
    </ModalComputerEditStyle>
  );
};
