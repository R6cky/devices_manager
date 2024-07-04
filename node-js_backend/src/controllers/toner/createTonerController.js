import { prismaClient } from "../../database/prismaClient.js";

export class CreateTonerController {
  async handle(req, res) {
    const { model, in_out } = req.body;
    const toner = await prismaClient.toner.create({
      data: {
        model,
        in_out,
      },
    });
    return res.status(201).json(toner);
  }
}
