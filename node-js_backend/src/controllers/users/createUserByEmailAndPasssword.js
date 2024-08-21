const bcrypt = require("bcrypt");
const { prismaClient } = require("../../database/prismaClient");

const createUserByEmail = async (user) => {
  user.password = bcrypt.hashSync(user.password, 12);
  return await prismaClient.user.create({
    data: user,
  });
};

export { createUserByEmail };
