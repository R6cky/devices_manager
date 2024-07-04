import { prismaClient } from "../../database/prismaClient.js";

export class GetTonerByIdController {
  async handle(req, res) {
    const toner = await prismaClient.toner.findUnique({
      where: {
        id: req.params.id,
      },
    });
    return res.json(toner);
  }
}
