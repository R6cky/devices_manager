import bcrypt from "bcrypt";
import { prismaClient } from "../../database/prismaClient.js";

export const createUserByEmail = async (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 12);
  const user = await prismaClient.user.create({
    data: {
      email: req.body.email,
      password: req.body.password,
    },
  });
  return res.status(201).json(user);
};
