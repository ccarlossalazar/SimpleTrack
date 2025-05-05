import express from "express";
import {createEquipment, updateEquipment, deleteEquipment, getEquipment, getAllEquipment, countByLocation, countByType} from "../controllers/equipmentcon.js"

const router = express.Router()

//Create
router.post("/", createEquipment)
//Update
router.put("/:id", updateEquipment) 
//Delete
router.delete("/:id", deleteEquipment)
//GET
router.get("/:id", getEquipment)
//GET ALL
router.get("/", getAllEquipment)
//Count by type of equipment
router.get("/countByType", countByType)
//Equipment Count by location
router.get("/countByLocation", countByLocation)

export default router