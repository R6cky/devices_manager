import bcrypt from "bcrypt";
import { prismaClient } from "../../database/prismaClient.js";

export const createUserByEmail = async (user) => {
  user.password = bcrypt.hashSync(user.password, 12);
  return await prismaClient.user.create({
    data: user,
  });
};
