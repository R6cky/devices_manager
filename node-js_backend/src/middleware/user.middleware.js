import { getUserByEmail } from "../controllers/users/getUserByEmail.js";

export const userExists = async (req, res, next) => {
  const route = req.path;
  const { email } = req.body;
  const existingUser = await getUserByEmail(email);

  if (route === "/login") {
    if (!existingUser) {
      return res.status(400).json({ message: "User not found." });
    }
  }

  if (route === "/register") {
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }
  }

  next();
};

export const passwordValidador = async (req, res, next) => {
  // const accesToken = generatedAccesToken(req.body);
  // const validPassword = await bcrypt.compare(
  //   req.body.password,
  //   existingUser.password
  // );
  // if (!validPassword) {
  //   res.status(403).json({ message: "Invalid login credentials." });
  //   throw new Error("Invalid login credentials.");
  // }
  // return res.status(200).json({ accesToken });
  // next();
};
