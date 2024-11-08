import { updateTasService } from "../../services/toner.services.js";

export const updateTonerController = async (req, res) => {
  try {
    const toner = await updateTasService(req.body, req.params.id);
    return res.status(200).json(toner);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
