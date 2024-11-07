import { prismaClient } from "../database/prismaClient.js";
import { schemaCreateTas } from "../utils/validators.js";

export const createTasService = async (data) => {
  const dataTas = schemaCreateTas.parse(data);
  return await prismaClient.tas.create({
    data: dataTas,
  });
};

export const deleteTasService = async (id) => {
  const tas = await prismaClient.tas.delete({
    where: {
      id: id,
    },
  });
  return tas;
};

export const getAllTasService = async () => {
  const bluebirds = await prismaClient.tas.findMany();
  return bluebirds;
};

export const getTasByIdService = async (id) => {
  const bluebirds = prismaClient.tas.findUnique({
    where: {
      id: id,
    },
  });
  return bluebirds;
};

export const updateTasService = async (data, id) => {
  const dataBluebird = schemaCreateBluebids.parse(data);
  const tas = prismaClient.tas.update({
    data: dataBluebird,
    where: { id: id },
  });
  return tas;
};
