import bcrypt from "bcrypt";
import { prismaClient } from "../database/prismaClient.js";
import { schemaRegisterAndLogin } from "../utils/validators.js";
import { generatedAccesToken } from "../utils/jwt.js";

export const createUserByEmail = async (user) => {
  const data = schemaRegisterAndLogin.parse(user);

  data.password = bcrypt.hashSync(user.password, 12);
  const newUser = await prismaClient.user.create({
    data: data,
  });
  return newUser;
};

export const userLoginService = async (user) => {
  try {
    const data = schemaRegisterAndLogin.parse(user);
    const { email, password } = data;

    const existingUser = await getUserByEmail(email);

    const validPassword = await bcrypt.compare(password, existingUser.password);
    if (!validPassword) {
      res.status(403).json({ message: "Invalid login credentials." });
      throw new Error("Invalid login credentials.");
    }

    const accesToken = generatedAccesToken(existingUser);
    return { ...data, accesToken };
  } catch (error) {
    console.log(error);
  }
};

export const getUserByEmail = (email) => {
  return prismaClient.user.findUnique({
    where: { email },
  });
};

export const getUserById = (id) => {
  return prismaClient.user.findUnique({
    where: { id },
  });
};
