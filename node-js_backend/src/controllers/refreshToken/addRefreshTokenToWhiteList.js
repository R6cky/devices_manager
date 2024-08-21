import { hashToken } from "../../api/utils/hashToken";
import { prismaClient } from "../../database/prismaClient";

const addRefreshTokenInWhiteList = ({ jti, refreshToken, userId }) => {
  return prismaClient.refreshToken.create({
    data: {
      jti,
      hashedToken: hashToken(refreshToken),
      userId,
    },
  });
};

const findRefreshTokenById = (id) => {
  return prismaClient.refreshToken.findUnique({
    where: { id },
  });
};

const deleteRefreshToken = (id) => {
  return prismaClient.refreshToken.update({
    where: { id },
    data: {
      revoked: true,
    },
  });
};

const revokedTokens = (userId) => {
  return prismaClient.refreshToken.updateMany({
    where: { id },
    data: {
      revoked: true,
    },
  });
};

export {
  addRefreshTokenInWhiteList,
  findRefreshTokenById,
  deleteRefreshToken,
  revokedTokens,
};
