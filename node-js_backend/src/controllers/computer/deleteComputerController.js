import { deleteComputerService } from "../../services/computer.service.js";

export const deleteComputerController = async (req, res) => {
  try {
    await deleteComputerService(req.params.id);
    return res.status(204).json({ message: "Deletado com sucesso!" });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
