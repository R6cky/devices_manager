import { prismaClient } from "../../database/prismaClient.js";

export class CreateBluebirdController {
  async handle(req, res) {
    const { serial_name, host_name, fix_date, description } = req.body;
    const bluebird = await prismaClient.blueBird.create({
      data: {
        serial_name,
        host_name,
        fix_date,
        description,
      },
    });
    return res.status(201).json(bluebird);
  }
}
