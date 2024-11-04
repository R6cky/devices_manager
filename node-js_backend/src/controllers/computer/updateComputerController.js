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
        data: {
          hostname: req.body.hostname,
          ip: req.body.ip,
          sector: req.body.sector,
          operational_system: req.body.operational_system,
          type: req.body.type,
        },
      });
    } catch (error) {}
    return res.status(200).json(computer);
  }
}
