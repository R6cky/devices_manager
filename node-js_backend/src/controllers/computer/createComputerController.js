import { prismaClient } from "../../database/prismaClient.js";
import { schemaCreateComputer } from "../../utils/validators.js";

export class CreateComputerController {
  async handle(req, res) {
    try {
      const dataComputer = schemaCreateComputer.parse(req.body);
      const computer = await prismaClient.computer.create({
        data: dataComputer,
      });
      res.status(201).json(computer);
    } catch (error) {
      console.log(error.issues);
      return res.status(400).json(error.issues);
    }
  }
}
