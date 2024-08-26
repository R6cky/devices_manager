import { prismaClient } from "../../database/prismaClient.js";

export const getUserByEmail = (email) => {
  return prismaClient.user.findUnique({
    where: { email },
  });
};
