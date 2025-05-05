import express from "express"
import {createRequest, getAllRequests, deleteRequest, getRequest} from "../controllers/requestscon.js"
//import {verifyToken} from "../util/verifyJWT.js"


const router = express.Router()


//CREATE
router.post("/create", createRequest)
//GET ALL
router.get("/", getAllRequests)
//DELETE
router.delete("/:id", deleteRequest)
//GET REQUEST BY ID
router.get("/:id", getRequest)


export default router