import { prismaClient } from "../../database/prismaClient.js";
import { schemaCreateTas } from "../../utils/validators.js";
export class UpdateTasController {
  async handle(req, res) {
    try {
      const dataTas = schemaCreateTas.partial(req.body);
      const tas = await prismaClient.tas.update({
        where: {
          id: req.params.id,
        },
        data: dataTas,
      });
      return res.status(200).json(tas);
    } catch (error) {
      console.log(error.issues);
      return res.status(400).json(error.issues);
    }
  }
}
