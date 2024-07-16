import { useContext } from "react";
import { ModalTonerEditStyle } from "./Styled";
import { TonerContext } from "../../../context/TonerContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup
  .object({
    model: yup.string().required(),
    quantity: yup.number().required(),
  })
  .required();

export const ModalTonerEdit = () => {
  const { updateToner, setModalEditIsOpen } = useContext(TonerContext);

  const dataToner = JSON.parse(localStorage.getItem("dataToner"));
  const idToner = dataToner.id;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = (data) => {
    updateToner(data, idToner);
  };

  return (
    <ModalTonerEditStyle>
      <form action="" className="form-toner" onSubmit={handleSubmit(submit)}>
        <div className="btn-close">
          <span onClick={() => setModalEditIsOpen(false)}>X</span>
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Modelo"
            defaultValue={dataToner.model}
            {...register("model")}
          />
          <p className="error-msg">{errors.model?.message}</p>
          <input
            type="text"
            placeholder="Quantidade"
            defaultValue={dataToner.quantity}
            {...register("quantity")}
          />
          <p className="error-msg">{errors.quantity?.message}</p>
          <input type="submit" className="btn-send" value={"Enviar"} />
        </div>
      </form>
    </ModalTonerEditStyle>
  );
};
