import express from "express"
import {createWorkOrder, deleteWorkOrder, getAllWorkOrders, getEquipmentWorkOrders, getWorkOrder, updateWorkOrder, workOrderCount} from "../controllers/workordercon.js"
//import {verifyToken} from "../util/verifyJWT.js"


const router = express.Router()


//CREATE
router.post("/", createWorkOrder)
//GET ALL
router.get("/", getAllWorkOrders)
//COUNT
router.get('/count', workOrderCount)
//GET BY EQUIPMENT ID
router.get("/equipment/:id", getEquipmentWorkOrders)
//DELETE
router.delete("/:id", deleteWorkOrder)
//GET BY ID
router.get("/:id", getWorkOrder)

router.put("/:id", updateWorkOrder)

export default router