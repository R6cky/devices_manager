import { getBluebirdByIdService } from "../../services/bluebird.service.js";

export const getBluebirdByIdController = async (req, res) => {
  const bluebird = await getBluebirdByIdService(req.params.id);
  return res.status(200).json(bluebird);
};
