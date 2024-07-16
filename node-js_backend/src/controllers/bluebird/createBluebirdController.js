import { prismaClient } from "../../database/prismaClient.js";

export class CreateBluebirdController {
  async handle(req, res) {
    const { serial_name, hostname, sector, owner } = req.body;
    const bluebird = await prismaClient.blueBird.create({
      data: {
        serial_name,
        hostname,
        sector,
        contact_number,
      },
    });
    return res.status(201).json(bluebird);
  }
}
