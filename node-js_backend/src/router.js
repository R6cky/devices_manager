import { Router } from "express";
import { CreateBluebirdController } from "./controllers/bluebird/createBluebirdController.js";
import { GetAllBluebirdsController } from "./controllers/bluebird/getAllBluebirdsController.js";
import {GetBluebirdByIdController} from "./controllers/bluebird/getBluebirdByIdController.js";
import {UpdateBluebirdController} from "./controllers/bluebird/updateBluebirdController.js";
import {DeleteBluebirdController} from "./controllers/bluebird/deleteBluebirdController.js";


const router = Router();

const createBluebirds = new CreateBluebirdController();
const getAllBluebirds = new GetAllBluebirdsController();
const getBluebirdById = new GetBluebirdByIdController();
const updateBluebird = new UpdateBluebirdController();
const deleteBlueBird = new DeleteBluebirdController();


router.post("/bluebird", createBluebirds.handle);
router.get("/bluebird", getAllBluebirds.handle);
router.get("/bluebird/:id", getBluebirdById.handle);
router.patch("/bluebird/:id", updateBluebird.handle);
router.delete("/bluebird/:id", deleteBlueBird.handle);



export { router };
