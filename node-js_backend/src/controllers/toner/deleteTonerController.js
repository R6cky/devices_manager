import { prismaClient } from "../../database/prismaClient.js";

export class DeleteTonerController {
  async handle(req, res) {
    const toner = await prismaClient.toner.delete({
      where: {
        id: req.params.id,
      },
    });
    return res.status(204).json(toner);
  }
}
