import { router } from "./router.js";
import express from "express";
import cors from "cors";

const port = 3000;

const app = express();
app.use(cors());

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//   app.use(cors());
//   next();
// });
app.use(express.json());
app.use(router);
app.listen(`${port}`, () => {
  console.log(`Running on port ${port}`);
});
