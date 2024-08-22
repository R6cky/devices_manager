import { createUserByEmail } from "../../controllers/users/createUserByEmailAndPasssword.js";
import { getUserByEmail } from "../../controllers/users/getUserByEmail.js";
import { v4 as uuiv4 } from "uuid";
import { generateTokens } from "../../utils/jwt.js";
import { addRefreshTokenInWhiteList } from "../refreshToken/addRefreshTokenToWhiteList.js";

export class UserController {
  async register(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        res.status(400);
        throw new Error("You must provide an email and password.");
      }

      const existingUser = await getUserByEmail(email);

      if (existingUser) {
        res.status(400);
        throw new Error("User already exists.");
      }

      const user = createUserByEmail({ email, password });
      const jti = uuiv4();
      const { accesToken, refreshToken } = generateTokens(user, jti);
      await addRefreshTokenInWhiteList({ jti, refreshToken, userId: user.id });
      res.json({ accesToken, refreshToken });
    } catch (error) {
      next(error);
    }
  }
}
