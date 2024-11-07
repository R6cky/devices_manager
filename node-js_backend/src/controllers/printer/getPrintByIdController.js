import { getPrinterByIdService } from "../../services/printer.service.js";

export const getPrintByIdController = async (req, res) => {
  const printer = await getPrinterByIdService(req.params.id);
  return res.status(200).json(printer);
};
