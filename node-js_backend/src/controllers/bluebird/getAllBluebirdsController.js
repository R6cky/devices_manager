import { getAllBluebirdService } from "../../services/bluebird.service.js";

export const getAllBluebirdsController = async (req, res) => {
  try {
    const bluebirds = await getAllBluebirdService();
    console.log(bluebirds);
    return res.status(200).json(bluebirds);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
