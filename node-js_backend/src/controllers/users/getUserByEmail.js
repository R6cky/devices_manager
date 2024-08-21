import { prismaClient } from "../../database/prismaClient";

const getUserByEmailAndPassword = (email) => {
  return prismaClient.user.findUnique({
    where: { email },
  });
};

export { getUserByEmailAndPassword };
