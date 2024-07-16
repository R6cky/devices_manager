import { prismaClient } from "../../database/prismaClient.js";

export class UpdatePrintController {
  async handle(req, res) {
    const printer = await prismaClient.print.update({
      where: {
        id: req.params.id,
      },
      data: {
        hostname: req.body.hostname,
        ip: req.body.ip,
        brand_and_model: req.body.brand_and_model,
      },
    });
    return res.status(200).json(printer);
  }
}
