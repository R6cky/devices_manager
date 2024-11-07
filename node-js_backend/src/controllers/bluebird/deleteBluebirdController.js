import { deleteBluebirdService } from "../../services/bluebird.service.js";

export const deleteBluebirdController = (req, res) => {
  try {
    deleteBluebirdService(req.params.id);
    return res.status(204).json({ message: "Deletado com sucesso!" });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
