import { prismaClient } from "../../database/prismaClient.js";
import { schemaCreateBluebids } from "../../utils/validators.js";
export class UpdateBluebirdController {
  async handle(req, res) {
    try {
      const dataBluebird = schemaCreateBluebids.parse(req.body);
      const blueBird = await prismaClient.blueBird.update({
        where: {
          id: req.params.id,
        },
        data: dataBluebird,
      });
      return res.status(200).json(blueBird);
    } catch (error) {
      console.log(error.issues);
      return res.status(400).json(error.issues);
    }
  }
}
