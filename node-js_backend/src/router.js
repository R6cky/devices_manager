import { Router } from "express";
import { CreateBluebirdController } from "./controllers/bluebird/createBluebirdController.js";
import { GetAllBluebirdsController } from "./controllers/bluebird/getAllBluebirdsController.js";
import { GetBluebirdByIdController} from "./controllers/bluebird/getBluebirdByIdController.js";
import { UpdateBluebirdController} from "./controllers/bluebird/updateBluebirdController.js";
import { DeleteBluebirdController} from "./controllers/bluebird/deleteBluebirdController.js";
import { CreateComputerController } from "./controllers/computer/createComputerController.js";
import { GetAllComputerController } from "./controllers/computer/getAllComputerController.js";
import { GetComputerByIdController } from "./controllers/computer/getComputerByIdController.js";
import { UpdateComputerController } from "./controllers/computer/updateComputerController.js";
import { DeleteComputerController } from "./controllers/computer/deleteComputerController.js";
import { CreatePrintController } from "./controllers/print/createPrintController.js";
import { GetAllPrintController } from "./controllers/print/getAllPrintController.js";
import { GetPrintByIdController } from "./controllers/print/getPrintByIdController.js";
import { UpdatePrintController } from "./controllers/print/updatePrintController.js";
import { DeletePrintController } from "./controllers/print/deletePrintController.js";


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



router.post("/bluebird", createBluebirds.handle);
router.get("/bluebird", getAllBluebirds.handle);
router.get("/bluebird/:id", getBluebirdById.handle);
router.patch("/bluebird/:id", updateBluebird.handle);
router.delete("/bluebird/:id", deleteBlueBird.handle);

router.post("/computer", createComputer.handle);
router.get("/computer", getAllComputer.handle);
router.get("/computer/:id", getComputerById.handle);
router.patch("/computer/:id", updateComputer.handle);
router.delete("/computer/:id", deleteComputer.handle);


router.post("/print", createPrint.handle);
router.get("/print", getAllPrint.handle);
router.get("/print/:id", getPrintById.handle);
router.patch("/print/:id", updatePrint.handle);
router.delete("/print/:id", deletePrint.handle);


export { router };
