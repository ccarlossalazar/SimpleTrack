import express from "express";
import {createEquipment, updateEquipment, deleteEquipment, getEquipment, getAllEquipment, countByLocation, countByType, equipmentCount} from "../controllers/equipmentcon.js"

const router = express.Router()

//Create
router.post("/", createEquipment)
//GET ALL
router.get("/", getAllEquipment)
//Count by type of equipment
router.get("/countByType", countByType)
//Equipment Count by location
router.get("/countByLocation", countByLocation)
//Count
router.get("/count", equipmentCount)
//Update
router.put("/:id", updateEquipment) 
//Delete
router.delete("/:id", deleteEquipment)
//GET
router.get("/:id", getEquipment)
export default router