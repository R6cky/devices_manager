import { prismaClient } from "../../database/prismaClient.js";
import { schemaCreatePrinter } from "../../utils/validators.js";

export class UpdatePrintController {
  async handle(req, res) {
    try {
      const dataPrinter = schemaCreatePrinter.partial(req.body);
      const printer = await prismaClient.printer.update({
        where: {
          id: req.params.id,
        },
        data: dataPrinter,
      });
      return res.status(200).json(printer);
    } catch (error) {
      console.log(error.issues);
      res.status(200).json(error.issues);
    }
  }
}
