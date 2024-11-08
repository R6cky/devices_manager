import { getTonerByIdService } from "../../services/toner.services.js";

export const getTonerByIdController = async (req, res) => {
  try {
    const toner = await getTonerByIdService(req.params.id);
    return res.status(200).json(toner);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
