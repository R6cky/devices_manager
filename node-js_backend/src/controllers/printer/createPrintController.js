import { prismaClient } from "../../database/prismaClient.js";
import { schemaCreatePrinter } from "../../utils/validators.js";

export class CreatePrintController {
  async handle(req, res) {
    try {
      const dataPrinter = schemaCreatePrinter.parse(req.body);
      const print = await prismaClient.printer.create({
        data: dataPrinter,
      });
      return res.status(201).json(print);
    } catch (error) {
      console.log(error.issues);
      return res.status(400).json(error.issues);
    }
  }
}
