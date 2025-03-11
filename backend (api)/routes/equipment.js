import express from "express";
import Equipment from "../models/Equipment.js";

const router = express.Router()

//Create
router.post("/", async (req, res)=> {

const newEquipment = new Equipment(req,body)

    try{
        const savedEquipment = await newEquipment.save()
        res.status(200).json(savedEquipment)
    } catch (err) {
        res.status(500).json(err)
    }
})
//Update

//Delete

//GET

//GET ALL


export default router