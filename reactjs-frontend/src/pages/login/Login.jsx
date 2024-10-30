import { LoginStyled } from "./styled";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer } from "react-toastify";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

const schema = yup.object({
  email: yup
    .string()
    .required("Campo obrigatírio")
    .email("Digite um e-mail válido"),
  password: yup.string().required("Campo obrigatírio"),
});
export const Login = () => {
  const { loginUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submit = (data) => {
    loginUser(data);
  };

  return (
    <LoginStyled>
      <form action="" onSubmit={handleSubmit(submit)}>
        <input
          type="email"
          name=""
          id=""
          placeholder="Email"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>
        <input type="password" placeholder="Senha" {...register("password")} />
        {errors.password?.message}
        <button type="submit">Login</button>
      </form>
      <ToastContainer />
    </LoginStyled>
  );
};
