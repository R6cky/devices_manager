import { getAllPrinterService } from "../../services/printer.service.js";

export const getAllPrintController = async (req, res) => {
  try {
    const printers = await getAllPrinterService();
    return res.status(200).json(printers);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
