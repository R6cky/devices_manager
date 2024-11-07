import { getAllBluebirdService } from "../../services/bluebird.service.js";

export const getAllBluebirdsController = async (req, res) => {
  const bluebirds = await getAllBluebirdService();
  console.log(bluebirds);
  return res.status(200).json(bluebirds);
};
