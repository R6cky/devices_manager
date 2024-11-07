import {
  createUserByEmail,
  userLoginService,
} from "../../services/user.service.js";

export const userRegister = async (req, res) => {
  const user = await createUserByEmail(req.body);
  return res
    .status(201)
    .json({ message: `Usuário ${user.email} criado com sucesso!` });
};

export const userLoginController = async (req, res, next) => {
  const user = await userLoginService(req.body);
  return res
    .status(200)
    .json({ user: user.email, accesToken: user.accesToken });
};
