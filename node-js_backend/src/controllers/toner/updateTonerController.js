import { prismaClient } from "../../database/prismaClient.js";

export class UpdateTonerController {
  async handle(req, res) {
    const { model, in_out } = req.body;

    const toner = await prismaClient.toner.update({
      where: {
        id: req.params.id,
      },
      data: {
        model,
        in_out,
      },
    });
    return res.status(200).json(toner);
  }
}
