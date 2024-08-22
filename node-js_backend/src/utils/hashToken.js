import crypto from "crypto";

export const hashToken = (token) => {
  return crypto.createHash("sha512").update(token).digest("hex");
};
