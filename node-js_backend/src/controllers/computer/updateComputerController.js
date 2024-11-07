import { updateComputerService } from "../../services/computer.service.js";

export const updateComputerController = async (req, res) => {
  try {
    const computer = await updateComputerService(req.body, req.params.id);
    return res.status(200).json(computer);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
