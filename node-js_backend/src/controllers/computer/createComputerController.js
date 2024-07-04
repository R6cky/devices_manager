import { prismaClient } from "../../database/prismaClient.js";

export class CreateComputerController {
  async handle(req, res) {
    const { hostname, ip, sector, operational_system, type } = req.body;

    const computer = await prismaClient.computer.create({
      data: {
        hostname,
        ip,
        sector,
        operational_system,
        type,
      },
    });
    return res.status(201).json(computer);
  }
}
