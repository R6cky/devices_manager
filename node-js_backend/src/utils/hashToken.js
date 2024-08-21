const crypto = require("crypto");

const hashToken = (token) => {
  return crypto.createHash("sha512").update(token).digest("hex");
};

exports = {
  hashToken,
};
