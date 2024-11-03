import { prismaClient } from "../../database/prismaClient.js";
import { schemaCreateBluebids } from "../../utils/validators.js";
export class CreateBluebirdController {
  async handle(req, res) {
    try {
      const dataBluebird = schemaCreateBluebids.parse(req.body);
      const bluebird = await prismaClient.blueBird.create({
        data: dataBluebird,
      });
      return res.status(201).json(bluebird);
    } catch (error) {
      console.log(error.issues);
      return res.status(400).json(error.issues);
    }
  }
}
