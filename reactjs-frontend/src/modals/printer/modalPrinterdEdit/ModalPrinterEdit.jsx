import { useContext } from "react";
import { ModalPrinterEditStyle } from "./Styled";
import { PrinterContext } from "../../../context/PrinterContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup
  .object({
    hostname: yup.string().required("Campo obrigatório"),
    ip: yup.string().required("Campo obrigatório"),
    brand_and_model: yup.string().required("Campo obrigatório"),
    queue_name: yup.string().required("Campo obrigatório"),
    sector: yup.string().required("Campo obrigatório"),
    toner_name: yup.string().required("Campo obrigatório"),
  })
  .required();

export const ModalPrinterEdit = () => {
  const { updatePrinter, setModalEditIsOpen } = useContext(PrinterContext);

  const dataPrinter = JSON.parse(localStorage.getItem("dataPrinter"));
  const idPrinter = dataPrinter.id;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = (data) => {
    updatePrinter(data, idPrinter);
  };

  return (
    <ModalPrinterEditStyle>
      <form action="" className="form-printer" onSubmit={handleSubmit(submit)}>
        <div className="btn-close">
          <span onClick={() => setModalEditIsOpen(false)}>X</span>
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="hostname"
            defaultValue={dataPrinter.hostname}
            {...register("hostname")}
          />
          <p className="error-msg">{errors.hostname?.message}</p>
          <input
            type="text"
            placeholder="Ip do computador"
            defaultValue={dataPrinter.ip}
            {...register("ip")}
          />
          <p className="error-msg">{errors.ip?.message}</p>
          <input
            type="text"
            placeholder="Marca e Modelo"
            defaultValue={dataPrinter.brand_and_model}
            {...register("brand_and_model")}
          />
          <p className="error-msg">{errors.brand_and_model?.message}</p>
          <input
            type="text"
            placeholder="Nome da fila"
            defaultValue={dataPrinter.queue_name}
            {...register("queue_name")}
          />
          <p className="error-msg">{errors.queue_name?.message}</p>
          <input
            type="text"
            placeholder="Setor"
            defaultValue={dataPrinter.sector}
            {...register("sector")}
          />
          <p className="error-msg">{errors.sector?.message}</p>
          <input
            type="text"
            placeholder="Toner"
            defaultValue={dataPrinter.toner_name}
            {...register("toner_name")}
          />
          <p className="error-msg">{errors.toner_name?.message}</p>
          <input type="submit" className="btn-send" value={"Enviar"} />
        </div>
      </form>
    </ModalPrinterEditStyle>
  );
};
