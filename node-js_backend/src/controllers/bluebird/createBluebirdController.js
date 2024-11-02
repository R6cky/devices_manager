import { prismaClient } from "../../database/prismaClient.js";
import { schemaCreateAndUpdateBluebids } from "../../utils/validators.js";
export class CreateBluebirdController {
  async handle(req, res) {
    const data = schemaCreateAndUpdateBluebids.parse(req.body);
    const { serial_number, hostname, sector, contact_number } = req.body;
    const bluebird = await prismaClient.blueBird.create({
      data: data,
    });
    return res.status(201).json(bluebird);
  }
}
