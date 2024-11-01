import { RegisterStyled } from "./styled";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { ToastContainer } from "react-toastify";
import { Footer } from "../../components/footer/Footer";
import { Link } from "react-router-dom";

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
        <div className="title-form">
          <h3>Register</h3>
        </div>
        <div className="input-mail">
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            {...register("email")}
          />
          <p> {errors.email?.message}</p>
        </div>
        <div className="input-password">
          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          <p> {errors.password?.message}</p>
        </div>
        <button type="submit">Criar</button>
        <div className="redirect-button-div">
          <Link className="redirect-button-btn" to={"/login"}>
            Fazer Login
          </Link>
        </div>
      </form>
      <ToastContainer />
      <Footer />
    </RegisterStyled>
  );
};
