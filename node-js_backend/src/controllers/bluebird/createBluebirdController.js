import { createBluebirdService } from "../../services/bluebird.service.js";
export const createBluebirdController = async (req, res) => {
  const bluebird = await createBluebirdService(req.body);
  console.log(bluebird);
  return res.status(201).json(bluebird);
};
