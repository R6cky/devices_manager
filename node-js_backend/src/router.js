import { Router } from "express";
import { createBluebirdController } from "./controllers/bluebird/createBluebirdController.js";
import { getAllBluebirdsController } from "./controllers/bluebird/getAllBluebirdsController.js";
import { getBluebirdByIdController } from "./controllers/bluebird/getBluebirdByIdController.js";
import { updateBluebirdController } from "./controllers/bluebird/updateBluebirdController.js";
import { deleteBluebirdController } from "./controllers/bluebird/deleteBluebirdController.js";
import { createComputerController } from "./controllers/computer/createComputerController.js";
import { getAllComputerController } from "./controllers/computer/getAllComputerController.js";
import { getComputerByIdController } from "./controllers/computer/getComputerByIdController.js";
import { updateComputerController } from "./controllers/computer/updateComputerController.js";
import { deleteComputerController } from "./controllers/computer/deleteComputerController.js";
import { createPrintController } from "./controllers/printer/createPrintController.js";
import { getAllPrintController } from "./controllers/printer/getAllPrintController.js";
import { getPrintByIdController } from "./controllers/printer/getPrintByIdController.js";
import { updatePrintController } from "./controllers/printer/updatePrintController.js";
import { deletePrintController } from "./controllers/printer/deletePrintController.js";
import { createTasController } from "./controllers/tas/createTasController.js";
import { getTasByIdController } from "./controllers/tas/getTasByIdController.js";
import { updateTasController } from "./controllers/tas/updateTasController.js";
import { getAllTasController } from "./controllers/tas/getAllTasController.js";
import { deleteTasController } from "./controllers/tas/deleteTasController.js";
import { CreateTonerController } from "./controllers/toner/createTonerController.js";
import { GetAllTonerController } from "./controllers/toner/getAllTonerController.js";
import { GetTonerByIdController } from "./controllers/toner/getTonerByIdController.js";
import { UpdateTonerController } from "./controllers/toner/updateTonerController.js";
import { DeleteTonerController } from "./controllers/toner/deleteTonerController.js";
import {
  userLoginController,
  userRegister,
} from "./controllers/users/userRegisterAndLogin.js";
import { ensureAuth } from "./middleware/ensureAuth.js";
import { passwordValidate, userExists } from "./middleware/user.middleware.js";

const router = Router();

const createToner = new CreateTonerController();
const getAllToner = new GetAllTonerController();
const getTonerById = new GetTonerByIdController();
const updateToner = new UpdateTonerController();
const deleteToner = new DeleteTonerController();

router.post("/bluebird", ensureAuth, createBluebirdController);
router.get("/bluebird", ensureAuth, getAllBluebirdsController);
router.get("/bluebird/:id", ensureAuth, getBluebirdByIdController);
router.patch("/bluebird/:id", ensureAuth, updateBluebirdController);
router.delete("/bluebird/:id", ensureAuth, deleteBluebirdController);

router.post("/computer", ensureAuth, createComputerController);
router.get("/computer", ensureAuth, getAllComputerController);
router.get("/computer/:id", ensureAuth, getComputerByIdController);
router.patch("/computer/:id", ensureAuth, updateComputerController);
router.delete("/computer/:id", ensureAuth, deleteComputerController);

router.post("/print", ensureAuth, createPrintController);
router.get("/print", ensureAuth, getAllPrintController);
router.get("/print/:id", ensureAuth, getPrintByIdController);
router.patch("/print/:id", ensureAuth, updatePrintController);
router.delete("/print/:id", ensureAuth, deletePrintController);

router.post("/tas", ensureAuth, createTasController);
router.get("/tas", ensureAuth, getAllTasController);
router.get("/tas/:id", ensureAuth, getTasByIdController);
router.patch("/tas/:id", ensureAuth, updateTasController);
router.delete("/tas/:id", ensureAuth, deleteTasController);

router.post("/toner", ensureAuth, createToner.handle);
router.get("/toner", ensureAuth, getAllToner.handle);
router.get("/toner/:id", ensureAuth, getTonerById.handle);
router.patch("/toner/:id", ensureAuth, updateToner.handle);
router.delete("/toner/:id", ensureAuth, deleteToner.handle);

router.post("/register", userExists, userRegister);
router.post("/login", userExists, passwordValidate, userLoginController);

export { router };
