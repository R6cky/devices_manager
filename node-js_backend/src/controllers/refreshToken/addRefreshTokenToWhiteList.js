import { hashToken } from "../../utils/hashToken.js";
import { prismaClient } from "../../database/prismaClient.js";

export const addRefreshTokenInWhiteList = ({ jti, refreshToken, userId }) => {
  return prismaClient.refreshToken.create({
    data: {
      id: jti,
      hashedToken: hashToken(refreshToken),
      userId,
    },
  });
};

export const findRefreshTokenById = (id) => {
  return prismaClient.refreshToken.findUnique({
    where: { id },
  });
};

export const deleteRefreshToken = (id) => {
  return prismaClient.refreshToken.update({
    where: { id },
    data: {
      revoked: true,
    },
  });
};

export const revokedTokens = (userId) => {
  return prismaClient.refreshToken.updateMany({
    where: { userId },
    data: {
      revoked: true,
    },
  });
};
