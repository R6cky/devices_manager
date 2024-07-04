import { prismaClient } from "../../database/prismaClient.js";

export class CreateTasController {
  async handle(req, res) {
    const { hostname, wifi_name } = req.body;

    const tas = await prismaClient.tas.create({
      data: {
        hostname: req.body.hostname,
        wifi_name: req.body.wifi_name,
      },
    });
    return res.status(201).json(tas);
  }
}
