import express from "express";
import {createEquipment, updateEquipment, deleteEquipment, getEquipment, getAllEquipment} from "../controllers/equipmentcon.js"

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

export default router