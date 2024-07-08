import { useContext } from "react";
import { ModalPrinterEditStyle } from "./Styled";
import { PrinterContext } from "../../../context/PrinterContext";
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
          <input type="submit" className="btn-send" value={"Enviar"} />
        </div>
      </form>
    </ModalPrinterEditStyle>
  );
};
