import { prismaClient } from "../../database/prismaClient.js";

export class CreatePrintController {
  async handle(req, res) {
    const { hostname, ip, brand_and_model, queue_name, sector } = req.body;

    const print = await prismaClient.print.create({
      data: {
        hostname,
        ip,
        brand_and_model,
        queue_name,
        sector,
      },
    });
    return res.status(201).json(print);
  }
}
