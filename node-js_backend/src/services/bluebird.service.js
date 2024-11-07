import { prismaClient } from "../database/prismaClient.js";
import { schemaCreateBluebids } from "../utils/validators.js";

export const createBluebirdService = async (data) => {
  const dataBluebird = schemaCreateBluebids.parse(data);
  const bluebird = await prismaClient.blueBird.create({
    data: dataBluebird,
  });
  return bluebird;
};

export const deleteBluebirdService = async (id) => {
  const bluebird = await prismaClient.blueBird.delete({
    where: {
      id: id,
    },
  });
  return bluebird;
};

export const getAllBluebirdService = async () => {
  const bluebirds = await prismaClient.blueBird.findMany();
  return bluebirds;
};

export const getBluebirdByIdService = async (id) => {
  const bluebirds = prismaClient.blueBird.findUnique({
    where: {
      id: id,
    },
  });
  return bluebirds;
};

export const updateBluebirdService = async (data, id) => {
  const dataBluebird = schemaCreateBluebids.parse(data);
  const bluebird = prismaClient.blueBird.update({
    data: dataBluebird,
    where: { id: id },
  });
  return bluebird;
};
