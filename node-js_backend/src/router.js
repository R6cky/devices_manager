import { Router } from "express";
import { CreateBluebirdController } from "./controllers/bluebird/createBluebirdController.js";
import { GetAllBluebirdsController } from "./controllers/bluebird/getAllBluebirdsController.js";
import { GetBluebirdByIdController } from "./controllers/bluebird/getBluebirdByIdController.js";
import { UpdateBluebirdController } from "./controllers/bluebird/updateBluebirdController.js";
import { DeleteBluebirdController } from "./controllers/bluebird/deleteBluebirdController.js";
import { CreateComputerController } from "./controllers/computer/createComputerController.js";
import { GetAllComputerController } from "./controllers/computer/getAllComputerController.js";
import { GetComputerByIdController } from "./controllers/computer/getComputerByIdController.js";
import { UpdateComputerController } from "./controllers/computer/updateComputerController.js";
import { DeleteComputerController } from "./controllers/computer/deleteComputerController.js";
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
import { UserController } from "./controllers/users/userRegisterAndLogin.js";
import { ensureAuth } from "./middleware/ensureAuth.js";

const router = Router();

const createBluebirds = new CreateBluebirdController();

const getAllBluebirds = new GetAllBluebirdsController();
const getBluebirdById = new GetBluebirdByIdController();
const updateBluebird = new UpdateBluebirdController();
const deleteBlueBird = new DeleteBluebirdController();

const createComputer = new CreateComputerController();
const getAllComputer = new GetAllComputerController();
const getComputerById = new GetComputerByIdController();
const updateComputer = new UpdateComputerController();
const deleteComputer = new DeleteComputerController();

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

const userRegister = new UserController();

router.post("/bluebird", ensureAuth, createBluebirds.handle);
router.get("/bluebird", ensureAuth, getAllBluebirds.handle);
router.get("/bluebird/:id", ensureAuth, getBluebirdById.handle);
router.patch("/bluebird/:id", ensureAuth, updateBluebird.handle);
router.delete("/bluebird/:id", ensureAuth, deleteBlueBird.handle);

router.post("/computer", ensureAuth, createComputer.handle);
router.get("/computer", ensureAuth, getAllComputer.handle);
router.get("/computer/:id", ensureAuth, getComputerById.handle);
router.patch("/computer/:id", ensureAuth, updateComputer.handle);
router.delete("/computer/:id", ensureAuth, deleteComputer.handle);
router.delete("/computer/:id", ensureAuth, deleteComputer.handle);

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

router.post("/register", userRegister.register);
router.post("/login", userRegister.login);

export { router };
