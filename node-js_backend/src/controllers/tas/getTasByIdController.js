import { prismaClient } from "../../database/prismaClient.js";

export class GetTasByIdController {
  async handle(req, res) {
    const tas = await prismaClient.tas.findUnique({
      where: {
        id: req.params.id,
      },
    });
    return res.json(tas);
  }
}
