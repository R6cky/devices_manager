import { prismaClient } from "../../database/prismaClient.js";
import { schemaCreateAndUpdateBluebids } from "../../utils/validators.js";
export class CreateBluebirdController {
  async handle(req, res) {
    const dataBluebird = schemaCreateAndUpdateBluebids.parse(req.body);
    const bluebird = await prismaClient.blueBird.create({
      data: dataBluebird,
    });
    return res.status(201).json(bluebird);
  }
}
