import { prismaClient } from "../database/prismaClient.js";
import { schemaCreateComputer } from "../utils/validators.js";

export const createComputerService = async (data) => {
  const dataComputer = schemaCreateComputer.parse(data);
  return await prismaClient.computer.create({
    data: dataComputer,
  });
};

export const deleteComputerService = async (id) => {
  return await prismaClient.computer.delete({
    where: {
      id: id,
    },
  });
};
