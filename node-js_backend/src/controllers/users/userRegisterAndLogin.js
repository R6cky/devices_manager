import { createUserByEmail } from "./createUserByEmailAndPasssword.js";
import { getUserByEmail } from "./getUserByEmail.js";
import { v4 as uuiv4 } from "uuid";
import { generateTokens } from "../../utils/jwt.js";
import { addRefreshTokenInWhiteList } from "../refreshToken/addRefreshTokenToWhiteList.js";
import bcrypt from "bcrypt";
import { schemaRegisterAndLogin } from "../../utils/validators.js";

export class UserController {
  async register(req, res, next) {
    const data = schemaRegisterAndLogin.parse(req.body);

    try {
      const { email, password } = data;
      if (!email || !password) {
        res.status(400);
        throw new Error("You must provide an email and password.");
      }

      const existingUser = await getUserByEmail(email);

      if (existingUser) {
        res.status(400);
        throw new Error("User already exists.");
      }

      const user = await createUserByEmail(data);
      const jti = uuiv4();
      const { accesToken, refreshToken } = generateTokens(user, jti);
      await addRefreshTokenInWhiteList({ jti, refreshToken, userId: user.id });
      return res.status(201).json({ user, accesToken, refreshToken });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async login(req, res, next) {
    const data = schemaRegisterAndLogin.parse(req.body);

    try {
      const { email, password } = data;
      if (!email || !password) {
        res.status(400);
        throw new Error("You must provide an email and password.");
      }

      const existingUser = await getUserByEmail(email);

      if (!existingUser) {
        res.status(403);
        throw new Error("Invalid login credentials.");
      }

      const validPassword = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (!validPassword) {
        res.status(403);
        throw new Error("Invalid login credentials.");
      }

      const jti = uuiv4();
      const { accesToken, refreshToken } = generateTokens(existingUser, jti);
      await addRefreshTokenInWhiteList({
        jti,
        refreshToken,
        userId: existingUser.id,
      });
      res.status(200).json({ accesToken, refreshToken });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
