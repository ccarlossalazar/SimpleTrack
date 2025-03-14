import express from "express"
import {createWorkOrder} from "../controllers/workordercon.js"
//import {verifyToken} from "../util/verifyJWT.js"


const router = express.Router()

router.post("/", createWorkOrder)


export default router