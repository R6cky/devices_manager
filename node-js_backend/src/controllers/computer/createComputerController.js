import { createComputerService } from "../../services/computer.service.js";

export const createComputerController = async (req, res) => {
  try {
    const computer = await createComputerService(req.body);
    res.status(201).json(computer);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
