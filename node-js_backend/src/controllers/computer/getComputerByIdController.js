import { getComputerByIdService } from "../../services/computer.service.js";

export const getComputerByIdController = async (req, res) => {
  try {
    const computer = await getComputerByIdService(req.params.id);
    return res.status(200).json(computer);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
