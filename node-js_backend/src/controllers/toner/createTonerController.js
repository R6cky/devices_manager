import { prismaClient } from "../../database/prismaClient.js";
import { schemaCreateToner } from "../../utils/validators.js";

export class CreateTonerController {
  async handle(req, res) {
    try {
      const dataToner = schemaCreateToner.parse(req.body);
      const toner = await prismaClient.toner.create({
        data: dataToner,
      });
      return res.status(201).json(toner);
    } catch (error) {
      console.log(error.issues);
      return res.status(400).json(error.issues);
    }
  }
}
