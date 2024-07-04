import { prismaClient } from "../../database/prismaClient.js";

export class GetAllTonerController {
  async handle(req, res) {
    const toner = await prismaClient.toner.findMany();
    return res.status(200).json(toner);
  }
}
