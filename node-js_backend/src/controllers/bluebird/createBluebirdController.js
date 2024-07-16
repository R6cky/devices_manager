import { prismaClient } from "../../database/prismaClient.js";

export class CreateBluebirdController {
  async handle(req, res) {
    const { serial_number, hostname, sector, contact_number } = req.body;
    const bluebird = await prismaClient.blueBird.create({
      data: {
        serial_number,
        hostname,
        sector,
        contact_number,
      },
    });
    return res.status(201).json(bluebird);
  }
}
