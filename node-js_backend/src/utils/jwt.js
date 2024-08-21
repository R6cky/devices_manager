const jwt = require("jsonwebtoken");

const generatedAccesToken = (user) => {
  return jwt.sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "5m",
  });
};

const generateRefreshToken = (user, jti) => {
  return jwt.sign({ userId: user.id, jti }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "1h",
  });
};

const generateTokens = (user, jti) => {
  const acccesToken = generatedAccesToken(user);
  const refreshToken = generateRefreshToken(user, jti);
  return { acccesToken, refreshToken };
};

exports = {
  generatedAccesToken,
  generateRefreshToken,
  generateTokens,
};
