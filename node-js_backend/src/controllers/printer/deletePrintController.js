import { prismaClient } from "../../database/prismaClient.js";

export class DeletePrintController {
  async handle(req, res) {
    const print = await prismaClient.printer.delete({
      where: {
        id: req.params.id,
      },
    });
    return res.status(204).json(print);
  }
}
