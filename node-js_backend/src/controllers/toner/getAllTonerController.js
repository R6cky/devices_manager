import { getAllTonerService } from "../../services/toner.services.js";

export const getAllTonerController = async (req, res) => {
  try {
    const toners = await getAllTonerService();
    return res.status(200).json(toners);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
