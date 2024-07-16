import { prismaClient } from "../../database/prismaClient.js";

export class CreatePrintController {
  async handle(req, res) {
    const { hostname, ip, brand_and_model, queue_name, sector, toner_name } =
      req.body;

    const print = await prismaClient.printer.create({
      data: {
        hostname,
        ip,
        brand_and_model,
        queue_name,
        sector,
        toner_name,
      },
    });
    return res.status(201).json(print);
  }
}
