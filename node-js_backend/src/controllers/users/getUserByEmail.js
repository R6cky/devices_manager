import { prismaClient } from "../../database/prismaClient.js";

const getUserByEmail = (email) => {
  return prismaClient.user.findUnique({
    where: { email },
  });
};

export { getUserByEmail };
