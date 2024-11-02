import { router } from "./router.js";
import express from "express";
import cors from "cors";

const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.listen(`${port}`, () => {
  console.log(`Running on port ${port}`);
});
