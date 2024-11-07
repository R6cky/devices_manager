import { deleteBluebirdService } from "../../services/bluebird.service.js";

export const deleteBluebirdController = (req, res) => {
  deleteBluebirdService(req.params.id);
  return res.status(204).json({ message: "Deletado com sucesso!" });
};
