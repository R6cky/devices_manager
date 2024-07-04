import { prismaClient } from "../../database/prismaClient.js";

export class GetAllTasController {
  async handle(req, res) {
    const tas = await prismaClient.tas.findMany();
    return res.status(200).json(tas);
  }
}
