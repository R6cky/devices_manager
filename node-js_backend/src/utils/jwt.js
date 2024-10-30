import jwt from "jsonwebtoken";

export const generatedAccesToken = (user) => {
  return jwt.sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "20m",
  });
};

export const generateRefreshToken = (user, jti) => {
  return jwt.sign({ userId: user.id, jti }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "1h",
  });
};

export const generateTokens = (user, jti) => {
  const accesToken = generatedAccesToken(user);
  const refreshToken = generateRefreshToken(user, jti);
  return { accesToken, refreshToken };
};
