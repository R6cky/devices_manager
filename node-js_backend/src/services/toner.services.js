import { schemaCreateToner } from "../utils/validators.js";
import { prismaClient } from "../database/prismaClient.js";

export const createTonerService = async (data) => {
  const dataToner = schemaCreateToner.parse(data);
  return await prismaClient.toner.create({
    data: dataToner,
  });
};

export const deleteTonerService = async (id) => {
  return await prismaClient.toner.delete({
    where: {
      id: id,
    },
  });
};

export const getAllTonerService = async () => {
  return await prismaClient.toner.findMany();
};

export const getTonerByIdService = async (id) => {
  return prismaClient.toner.findUnique({
    where: {
      id: id,
    },
  });
};

export const updateTasService = async (data, id) => {
  const dataToner = schemaCreateToner.parse(data);
  return prismaClient.toner.update({
    data: dataToner,
    where: { id: id },
  });
};
