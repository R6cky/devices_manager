import { prismaClient } from "../../database/prismaClient.js";

export class GetPrintByIdController {
  async handle(req, res) {
    const printer = await prismaClient.printer.findUnique({
      where: {
        id: req.params.id,
      },
    });
    return res.json(printer);
  }
}
