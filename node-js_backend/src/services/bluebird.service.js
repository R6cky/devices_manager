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
