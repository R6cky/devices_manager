import { prismaClient } from "../../database/prismaClient.js";
import { schemaCreateComputer } from "../../utils/validators.js";

export class UpdateComputerController {
  async handle(req, res) {
    const dataComputer = schemaCreateComputer.parse(req.body);
    try {
      const computer = await prismaClient.computer.update({
        where: {
          id: req.params.id,
        },
        data: dataComputer,
      });
      return res.status(200).json(computer);
    } catch (error) {
      console.log(error.issues);
      return res.status(400).json(error.issues);
    }
  }
}
