import { prismaClient } from "../../database/prismaClient.js";
import { schemaCreateTas } from "../../utils/validators.js";

export class CreateTasController {
  async handle(req, res) {
    try {
      const dataTas = schemaCreateTas.parse(req.body);
      const tas = await prismaClient.tas.create({
        data: dataTas,
      });
      return res.status(201).json(tas);
    } catch (error) {
      console.log(error.issues);
      return res.status(400).json(error.issues);
    }
  }
}
