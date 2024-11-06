import bcrypt from "bcrypt";
import { prismaClient } from "../../database/prismaClient.js";
import { schemaRegisterAndLogin } from "../../utils/validators.js";

export const createUserByEmail = async (user) => {
  const data = schemaRegisterAndLogin.parse(user);

  data.password = bcrypt.hashSync(user.password, 12);
  return await prismaClient.user.create({
    data: data,
  });
};
