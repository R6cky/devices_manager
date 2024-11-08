import { schemaCreateToner } from "../utils/validators.js";
import { prismaClient } from "../database/prismaClient.js";

export const createTonerService = async (data) => {
  const dataToner = schemaCreateToner.parse(data);
  return await prismaClient.toner.create({
    data: dataToner,
  });
};

export const deleteTonerService = async (id) => {
  const toner = await prismaClient.toner.delete({
    where: {
      id: id,
    },
  });
  return toner;
};

export const getAllTonerService = async () => {
  const toner = await prismaClient.toner.findMany();
  return toner;
};

export const getTonerByIdService = async (id) => {
  const toner = prismaClient.toner.findUnique({
    where: {
      id: id,
    },
  });
  return toner;
};

export const updateTasService = async (data, id) => {
  const dataToner = schemaCreateToner.parse(data);
  const toner = prismaClient.toner.update({
    data: dataToner,
    where: { id: id },
  });
  return toner;
};
