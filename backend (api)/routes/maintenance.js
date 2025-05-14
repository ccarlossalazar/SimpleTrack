import express from "express"
import { getLogs, deleteLog, createLog, getEquipmentLogs, getLogById, logCount } from "../controllers/maintenancecon.js"

const router = express.Router()

router.post("/", createLog)

router.get("/", getLogs)

router.get("/count", logCount)

router.delete("/:id", deleteLog)

router.get("/:id", getEquipmentLogs)

router.get("/get/:id", getLogById)


export default router