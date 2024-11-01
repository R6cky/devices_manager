import { router } from "./router.js";
import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(router);
app.use(cors());

const port = 3000;

app.listen(`${port}`, () => {
  console.log(`Running on port ${port}`);
});
