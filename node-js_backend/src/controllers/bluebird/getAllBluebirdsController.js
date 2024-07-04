import { prismaClient } from "../../database/prismaClient.js";

export class GetAllBluebirdsController {
  async handle(req, res) {
    const bluebird = await prismaClient.blueBird.findMany();
    return res.status(200).json(bluebird);
  }
}
