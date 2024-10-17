import { RegisterStyled } from "./styled";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const schema = yup
  .object({
    email: yup.string().required("Campo obrigatírio").email("Email inválido"),
    password: yup.string().required("Campo obrigatírio"),
  })
  .required();

export const Register = () => {
  const { createUser } = useContext(UserContext);

  const submit = (data) => {
    createUser(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <RegisterStyled>
      <form action="" onSubmit={handleSubmit(submit)}>
        <input
          type="email"
          name=""
          id=""
          placeholder="Email"
          {...register("email")}
        />
        <p> {errors.email?.message}</p>
        <input type="password" placeholder="Senha" {...register("password")} />
        <p> {errors.password?.message}</p>
        <button type="submit">Criar</button>
      </form>
    </RegisterStyled>
  );
};
