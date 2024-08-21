import { prismaClient } from "../../database/prismaClient";

const getUserById = (id) => {
  return prismaClient.user.findUnique({
    where: { id },
  });
};

export { getUserById };
