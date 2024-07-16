import { prismaClient } from "../../database/prismaClient.js";

export class UpdateTonerController {
  async handle(req, res) {
    const { model, quantity } = req.body;

    const toner = await prismaClient.toner.update({
      where: {
        id: req.params.id,
      },
      data: {
        model,
        quantity,
      },
    });
    return res.status(200).json(toner);
  }
}
