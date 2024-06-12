import { Router } from "express";
import { CreateBluebirdController } from "./controllers/bluebird/createBluebirdController.js";
import { GetAllBluebirdsController } from "./controllers/bluebird/getAllBluebirdsController.js";
import {GetBluebirdByIdController} from "./controllers/bluebird/getBluebirdByIdController.js";
import {UpdateBluebirdController} from "./controllers/bluebird/updateBluebirdController.js";
import {DeleteBluebirdController} from "./controllers/bluebird/deleteBluebirdController.js";
import { CreateComputerController } from "./controllers/computer/createComputerController.js";
import { GetAllComputerController } from "./controllers/computer/getAllComputerController.js";
import { GetComputerByIdController } from "./controllers/computer/getComputerByIdController.js";

const router = Router();

const createBluebirds = new CreateBluebirdController();
const getAllBluebirds = new GetAllBluebirdsController();
const getBluebirdById = new GetBluebirdByIdController();
const updateBluebird = new UpdateBluebirdController();
const deleteBlueBird = new DeleteBluebirdController();

const createComputer = new CreateComputerController();
const getAllComputer = new GetAllComputerController();
const getComputerById = new GetComputerByIdController();
// const updateComputer = new UpdateBluebirdController();
// const deleteComputer = new DeleteBluebirdController();






router.post("/bluebird", createBluebirds.handle);
router.get("/bluebird", getAllBluebirds.handle);
router.get("/bluebird/:id", getBluebirdById.handle);
router.patch("/bluebird/:id", updateBluebird.handle);
router.delete("/bluebird/:id", deleteBlueBird.handle);

router.post("/computer", createComputer.handle);
router.get("/computer", getAllComputer.handle);
router.get("/computer/:id", getComputerById.handle);
// router.patch("/computer/:id", updateComputer.handle);
// router.delete("/computer/:id", deleteComputer.handle);




export { router };
