import pkg from "jsonwebtoken";
const { verify } = pkg;

export const ensureAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).send("Por favor informe o token de autorização");
  }

  try {
    const [, token] = authHeader.split(" ");
    const secretKey = process.env.ACCESS_TOKEN_SECRET;
    const decoded = verify(token, secretKey);
    //const { userId } = decoded;
    // req.user = {
    //   id: userId,
    // };

    next();
  } catch (err) {
    console.log(err);
    res.status(401).send("Token inválido");
  }
};
