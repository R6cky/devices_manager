import { prismaClient } from "../../database/prismaClient.js";
import { schemaCreateToner } from "../../utils/validators.js";

export class UpdateTonerController {
  async handle(req, res) {
    try {
      const dataToner = schemaCreateToner.partial(req.body);
      const toner = await prismaClient.toner.update({
        where: {
          id: req.params.id,
        },
        data: dataToner,
      });
      return res.status(200).json(toner);
    } catch (error) {
      console.log(error.issues);
      return res.status(400).json(error.issues);
    }
  }
}
