import express from "express"
import { getLogs, deleteLog, createLog, getEquipmentLogs } from "../controllers/maintenancecon.js"

const router = express.Router()

router.post("/", createLog)

router.get("/", getLogs)

router.delete("/:id", deleteLog)

router.get("/:id", getEquipmentLogs)


export default router