import { getUserByEmail } from "../services/user.service.js";

export const userExists = async (req, res, next) => {
  const { email } = req.body;
  const existingUser = await getUserByEmail(email);

  if (req.path === "/login") {
    if (!existingUser) {
      return res.status(400).json({ message: "User not found." });
    }
  }

  if (req.path === "/register") {
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }
  }

  next();
};
