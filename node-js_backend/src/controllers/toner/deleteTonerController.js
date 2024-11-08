import { deleteTonerService } from "../../services/toner.services.js";

export const deleteTonerController = async (req, res) => {
  try {
    await deleteTonerService(req.params.id);
    return res.status(204).json({ message: "deletado com sucesso!" });
  } catch (error) {
    console.log(error);
    res.satus(400).json(error);
  }
};
