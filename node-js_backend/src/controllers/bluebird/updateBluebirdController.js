import { prismaClient } from "../../database/prismaClient.js";

export class UpdateBluebirdController {
  async handle(req, res) {
    const blueBird = await prismaClient.blueBird.update({
      where: {
        id: req.params.id,
      },
      data: {
        serial_name: req.body.serial_name,
        hostname: req.body.hostname,
        sector: req.body.sector,
        owner: req.body.owner,
      },
    });
    return res.json(blueBird);
  }
}
