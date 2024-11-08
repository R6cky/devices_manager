import { deleteTasService } from "../../services/tas.service.js";

export const deleteTasController = async (req, res) => {
  try {
    await deleteTasService(req.params.id);
    return res.status(204).json({ message: "Deletado com sucesso!" });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
