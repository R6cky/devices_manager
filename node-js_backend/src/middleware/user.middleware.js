import { getUserByEmail } from "../services/user.service.js";
import { schemaRegisterAndLogin } from "../utils/validators.js";
import bcrypt from "bcrypt";

export const userExists = async (req, res, next) => {
  const { email } = req.body;
  const existingUser = await getUserByEmail(email);

  if (req.path === "/login") {
    if (!existingUser) {
      return res
        .status(400)
        .json({ message: "your email or password are incorrect." });
    }
  }

  if (req.path === "/register") {
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }
  }

  next();
};

export const passwordValidate = async (req, res, next) => {
  const data = schemaRegisterAndLogin.parse(req.body);
  const { email, password } = data;

  const existingUser = await getUserByEmail(email);

  const validPassword = await bcrypt.compare(password, existingUser.password);
  if (!validPassword) {
    return res.status(403).json({ message: "Invalid login credentials." });
  }
  next();
};
