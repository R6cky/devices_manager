import { prismaClient } from "../../database/prismaClient.js";

export class UpdateBluebirdController {
  async handle(req, res) {
    const blueBird = await prismaClient.blueBird.update({
      where: {
        id: req.params.id,
      },
      data: {
        serial_number: req.body.serial_number,
        hostname: req.body.hostname,
        sector: req.body.sector,
        contact_number: req.body.contact_number,
      },
    });
    return res.json(blueBird);
  }
}
