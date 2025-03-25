import express from "express";
import {createEquipment, updateEquipment, deleteEquipment, getEquipment, getAllEquipment, countByType} from "../controllers/equipmentcon.js"

const router = express.Router()

//Create
router.post("/", createEquipment)
//Update
router.put("/:id", updateEquipment) 
//Delete
router.delete("/:id", deleteEquipment)
//GET
router.get("/find/:id", getEquipment)
//GET ALL
router.get("/", getAllEquipment)
//router.get("/countByLocation", countByLocation)
router.get("/countByType", countByType)

export default router