import { router } from "./router.js";
import express from "express";
import cors from "cors";

const port = 3000;

const app = express();

app.use(express.json());

app.use(router);
app.use(cors());

app.listen(`${port}`, () => {
  console.log(`Running on port ${port}`);
});
