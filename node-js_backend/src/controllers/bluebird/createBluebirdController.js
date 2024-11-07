import { createBluebirdService } from "../../services/bluebird.service.js";
export const createBluebirdController = async (req, res) => {
  try {
    const bluebird = await createBluebirdService(req.body);
    return res.status(201).json(bluebird);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
