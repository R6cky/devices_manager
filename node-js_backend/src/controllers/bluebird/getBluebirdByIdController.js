import { getBluebirdByIdService } from "../../services/bluebird.service.js";

export const getBluebirdByIdController = async (req, res) => {
  try {
    const bluebird = await getBluebirdByIdService(req.params.id);
    return res.status(200).json(bluebird);
  } catch (error) {
    console.log(error);
    return res.satus(400).json(error);
  }
};
