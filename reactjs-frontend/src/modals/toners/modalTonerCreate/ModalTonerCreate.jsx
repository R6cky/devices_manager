import { useContext } from "react";
import { ModalTonerStyle } from "./Styled";
import { TonerContext } from "../../../context/TonerContext";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    model: yup.string().required("Campo obrigatório"),
    quantity: yup
      .number()
      .typeError("Somente valor do tipo números")
      .required("Campo obrigatório"),
  })
  .shape()
  .required();

export const ModalTonerCreate = () => {
  const { createToner, setModalCreateIsOpen } = useContext(TonerContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = (data) => {
    createToner(data);
  };

  return (
    <ModalTonerStyle>
      <form action="" className="form-toner" onSubmit={handleSubmit(submit)}>
        <div className="btn-close">
          <span onClick={() => setModalCreateIsOpen(false)}>X</span>
        </div>
        <div className="input-container">
          <input type="text" placeholder="Modelo" {...register("model")} />
          <p className="error-msg">{errors.model?.message}</p>

          <input
            type="text"
            placeholder="Quantidade"
            {...register("quantity")}
          />
          <p className="error-msg">{errors.quantity?.message}</p>

          <input type="submit" className="btn-send" value={"Enviar"} />
        </div>
      </form>
    </ModalTonerStyle>
  );
};
