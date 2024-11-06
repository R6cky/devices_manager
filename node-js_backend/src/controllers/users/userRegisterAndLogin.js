import { createUserByEmail } from "./createUserByEmailAndPasssword.js";
import { getUserByEmail } from "./getUserByEmail.js";
import { generatedAccesToken } from "../../utils/jwt.js";
import bcrypt from "bcrypt";
import { schemaRegisterAndLogin } from "../../utils/validators.js";

export class UserController {
  async register(req, res, next) {
    try {
      const data = schemaRegisterAndLogin.parse(req.body);
      const { email } = data;

      const existingUser = await getUserByEmail(email);
      if (existingUser) {
        res.status(400).json({ message: "User already exists." });
        throw new Error("User already exists.");
      }

      const user = await createUserByEmail(data);
      const { accesToken } = generatedAccesToken(user);
      return res.status(201).json({ accesToken });
    } catch (error) {
      console.log(error);
      res.status(400).json(error.issues);
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const data = schemaRegisterAndLogin.parse(req.body);
      const { email, password } = data;

      const existingUser = await getUserByEmail(email);

      if (!existingUser) {
        res.status(404).json({ message: "User not found." });
        throw new Error("User not found.");
      }

      const validPassword = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (!validPassword) {
        res.status(403).json({ message: "Invalid login credentials." });
        throw new Error("Invalid login credentials.");
      }

      // const jti = uuiv4();
      const accesToken = generatedAccesToken(existingUser);
      res.status(200).json({ accesToken });
    } catch (error) {
      res.status(400).json(error.issues);
      console.log(error);
      next(error);
    }
  }
}
