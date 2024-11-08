import bcrypt from "bcrypt";
import { prismaClient } from "../database/prismaClient.js";
import { schemaRegisterAndLogin } from "../utils/validators.js";
import { generatedAccesToken } from "../utils/jwt.js";

export const userRegisterService = async (user) => {
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

    const accesToken = generatedAccesToken(data);
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
