import { getTasByIdService } from "../../services/tas.service.js";

export const getTasByIdController = async (req, res) => {
  try {
    const tas = await getTasByIdService(req.params.id);
    return res.status(200).json(tas);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
