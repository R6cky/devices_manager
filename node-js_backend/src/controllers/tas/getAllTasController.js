import { getAllTasService } from "../../services/tas.service.js";

export const getAllTasController = async (req, res) => {
  try {
    const tas = await getAllTasService();
    return res.status(200).json(tas);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
