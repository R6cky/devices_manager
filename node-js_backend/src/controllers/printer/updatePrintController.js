import { updatePrinterService } from "../../services/printer.service.js";

export const updatePrintController = async (req, res) => {
  try {
    const printer = await updatePrinterService(req.body, req.params.id);
    return res.status(200).json(printer);
  } catch (error) {
    console.log(error);
    res.status(200).json(error);
  }
};
