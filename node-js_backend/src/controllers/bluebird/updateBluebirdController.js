import { updateBluebirdService } from "../../services/bluebird.service.js";

export const updateBluebirdController = async (req, res) => {
  try {
    const bluebird = await updateBluebirdService(req.body, req.params.id);
    return res.status(200).json(bluebird);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
