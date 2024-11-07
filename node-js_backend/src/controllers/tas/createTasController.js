import { createTasService } from "../../services/tas.service.js";

export const createTasController = async (req, res) => {
  try {
    const tas = await createTasService(req.body);
    return res.status(201).json(tas);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
