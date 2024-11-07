import { deletePrinterService } from "../../services/printer.service.js";

export const deletePrintController = async (req, res) => {
  try {
    await deletePrinterService(req.parms.id);
    return res.status(204).json();
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
