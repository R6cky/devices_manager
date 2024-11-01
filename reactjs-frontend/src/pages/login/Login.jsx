import { LoginStyled } from "./styled";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer } from "react-toastify";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { Footer } from "../../components/footer/Footer";
import { Link } from "react-router-dom";

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
        <div className="title-form">
          <h3>Login</h3>
        </div>
        <div className="input-mail">
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
        </div>
        <div className="input-password">
          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
        </div>
        <button type="submit">Login</button>
        <div className="redirect-button-div">
          <Link className="redirect-button-btn" to={"/register"}>
            Cadastre-se
          </Link>
        </div>
      </form>

      <ToastContainer />
      <Footer />
    </LoginStyled>
  );
};
