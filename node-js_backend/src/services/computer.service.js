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

export const getAllComputerService = async () => {
  return await prismaClient.computer.findMany();
};

export const getComputerByIdService = async (id) => {
  return await prismaClient.computer.findUnique({ where: { id: id } });
};

export const updateComputerService = async (data, id) => {
  const dataComputer = schemaCreateComputer.parse(data);
  return await prismaClient.computer.update({
    data: dataComputer,
    where: {
      id: id,
    },
  });
};
