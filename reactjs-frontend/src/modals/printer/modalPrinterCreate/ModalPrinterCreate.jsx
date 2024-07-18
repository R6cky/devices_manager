import { useContext } from "react";
import { ModalPrinterStyle } from "./Styled";
import { PrinterContext } from "../../../context/PrinterContext";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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

export const ModalPrinterCreate = () => {
  const { createPrinter, setModalCreateIsOpen } = useContext(PrinterContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = (data) => {
    createPrinter(data);
  };

  return (
    <ModalPrinterStyle>
      <form action="" className="form-printer" onSubmit={handleSubmit(submit)}>
        <div className="btn-close">
          <span onClick={() => setModalCreateIsOpen(false)}>X</span>
        </div>
        <div className="input-container">
          <input type="text" placeholder="Hostname" {...register("hostname")} />
          <p className="error-msg">{errors.hostname?.message}</p>
          <input
            type="text"
            placeholder="IP da impressora"
            {...register("ip")}
          />
          <p className="error-msg">{errors.ip?.message}</p>
          <input
            type="text"
            placeholder="Marca e modelo"
            {...register("brand_and_model")}
          />
          <p className="error-msg">{errors.brand_and_model?.message}</p>
          <input
            type="text"
            placeholder="Nome da Fila"
            {...register("queue_name")}
          />
          <p className="error-msg">{errors.queue_name?.message}</p>
          <input type="text" placeholder="Setor" {...register("sector")} />
          <p className="error-msg">{errors.sector?.message}</p>
          <input type="text" placeholder="Toner" {...register("toner_name")} />
          <p className="error-msg">{errors.toner_name?.message}</p>
          <input type="submit" className="btn-send" value={"Enviar"} />
        </div>
      </form>
    </ModalPrinterStyle>
  );
};
