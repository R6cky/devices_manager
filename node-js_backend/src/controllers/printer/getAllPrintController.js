import { prismaClient } from "../../database/prismaClient.js";

export class GetAllPrintController {
  async handle(req, res) {
    const print = await prismaClient.printer.findMany();
    return res.status(200).json(print);
  }
}
