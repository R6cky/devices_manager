import {
  createUserByEmail,
  userLoginService,
} from "../../services/user.service.js";
import { getUserByEmail } from "./getUserByEmail.js";
import { generatedAccesToken } from "../../utils/jwt.js";
import bcrypt from "bcrypt";
import { schemaRegisterAndLogin } from "../../utils/validators.js";

export const userRegister = async (req, res) => {
  const user = await createUserByEmail(req.body);
  return res
    .status(201)
    .json({ message: `Usuário ${user.email} criado com sucesso!` });
};

export const userLoginController = async (req, res, next) => {
  const user = await userLoginService(req.body);
  console.log("USERLOGIN", user);
  res.status(201).json({ ...user });
};
