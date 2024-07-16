import { prismaClient } from "../../database/prismaClient.js";

export class CreateTonerController {
  async handle(req, res) {
    const { model, quantity } = req.body;
    const toner = await prismaClient.toner.create({
      data: {
        model,
        quantity,
      },
    });
    return res.status(201).json(toner);
  }
}
