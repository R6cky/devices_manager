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
import { CreatePrintController } from "./controllers/printer/createPrintController.js";
import { GetAllPrintController } from "./controllers/printer/getAllPrintController.js";
import { GetPrintByIdController } from "./controllers/printer/getPrintByIdController.js";
import { UpdatePrintController } from "./controllers/printer/updatePrintController.js";
import { DeletePrintController } from "./controllers/printer/deletePrintController.js";
import { CreateTasController } from "./controllers/tas/createTasController.js";
import { GetTasByIdController } from "./controllers/tas/getTasByIdController.js";
import { UpdateTasController } from "./controllers/tas/updateTasController.js";
import { GetAllTasController } from "./controllers/tas/getAllTasController.js";
import { DeleteTasController } from "./controllers/tas/deleteTasController.js";
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

const createPrint = new CreatePrintController();
const getAllPrint = new GetAllPrintController();
const getPrintById = new GetPrintByIdController();
const updatePrint = new UpdatePrintController();
const deletePrint = new DeletePrintController();

const createTas = new CreateTasController();
const getAllTas = new GetAllTasController();
const getTasById = new GetTasByIdController();
const updateTas = new UpdateTasController();
const deleteTas = new DeleteTasController();

const createToner = new CreateTonerController();
const getAllToner = new GetAllTonerController();
const getTonerById = new GetTonerByIdController();
const updateToner = new UpdateTonerController();
const deleteToner = new DeleteTonerController();

//const userRegister = new UserController();

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

router.post("/print", ensureAuth, createPrint.handle);
router.get("/print", ensureAuth, getAllPrint.handle);
router.get("/print/:id", ensureAuth, getPrintById.handle);
router.patch("/print/:id", ensureAuth, updatePrint.handle);
router.delete("/print/:id", ensureAuth, deletePrint.handle);

router.post("/tas", ensureAuth, createTas.handle);
router.get("/tas", ensureAuth, getAllTas.handle);
router.get("/tas/:id", ensureAuth, getTasById.handle);
router.patch("/tas/:id", ensureAuth, updateTas.handle);
router.delete("/tas/:id", ensureAuth, deleteTas.handle);

router.post("/toner", ensureAuth, createToner.handle);
router.get("/toner", ensureAuth, getAllToner.handle);
router.get("/toner/:id", ensureAuth, getTonerById.handle);
router.patch("/toner/:id", ensureAuth, updateToner.handle);
router.delete("/toner/:id", ensureAuth, deleteToner.handle);

router.post("/register", userExists, userRegister);
router.post("/login", userExists, passwordValidate, userLoginController);

export { router };
