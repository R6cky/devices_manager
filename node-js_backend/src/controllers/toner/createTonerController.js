import { createTonerService } from "../../services/toner.services.js";

export const CreateTonerController = async (req, res) => {
  try {
    const toner = createTonerService(req.body);
    return res.status(201).json(toner);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
