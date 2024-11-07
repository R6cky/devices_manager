import { createBluebirdService } from "../../services/bluebird.service.js";
export const createBluebirdController = (req, res) => {
  const bluebird = createBluebirdService(req.body);
  return res.status(201).json(bluebird);
};
