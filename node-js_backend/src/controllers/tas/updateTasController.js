import { updateTasService } from "../../services/tas.service.js";

export const updateTasController = async (req, res) => {
  try {
    const tas = await updateTasService(req.body, req.params.id);
    return res.status(200).json(tas);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
