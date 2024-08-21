import { router } from "./router.js";
import express from "express";
import cors from "cors";
import * as newrelic from "newrelic";

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

const port = 3000;

app.listen(`${port}`, () => {
  console.log(`Running on port ${port}`);
});
