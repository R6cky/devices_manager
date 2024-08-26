import { prismaClient } from "../../database/prismaClient";

export const getUserById = (id) => {
  return prismaClient.user.findUnique({
    where: { id },
  });
};
