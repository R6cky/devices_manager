import { prismaClient } from "../database/prismaClient.js";
import { schemaCreateBluebids } from "../utils/validators.js";

export const createBluebirdService = async (data) => {
  try {
    const dataBluebird = schemaCreateBluebids.parse(data);
    const bluebird = await prismaClient.blueBird.create({
      data: dataBluebird,
    });

    return bluebird;
  } catch (error) {
    console.log(error);
  }
};

export const deleteBluebirdService = async (id) => {
  try {
    const bluebird = await prismaClient.blueBird.delete({
      where: {
        id: id,
      },
    });
    return bluebird;
  } catch (error) {
    console.log(error);
  }
};

export const getAllBluebirdService = async () => {
  try {
    const bluebirds = await prismaClient.blueBird.findMany();
    return bluebirds;
  } catch (error) {
    console.log(error);
  }
};
