import { getAllComputerService } from "../../services/computer.service.js";

export const getAllComputerController = async (req, res) => {
  try {
    const computers = await getAllComputerService();
    return res.status(200).json(computers);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
