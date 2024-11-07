import { createPrinterService } from "../../services/printer.service.js";

export const createPrintController = async (req, res) => {
  try {
    const dataPrinter = await createPrinterService(req.body);
    return res.status(201).json(dataPrinter);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
