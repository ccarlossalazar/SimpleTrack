import express from "express"
import {updateUser,deleteUser,
getUser, getUsers} from "../controllers/userscon.js"
import {verifyToken, verifyUser} from "../util/verifyJWT.js"

const router = express.Router()

router.get("/authentication", verifyToken, (req,res,next)=>{
res.send("Hello user you are verified")
})

router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
res.send("You are logged in and can delete your account or anyone elses")
})
//Update
router.put("/:id", updateUser) 
//Delete
router.delete("/:id", deleteUser)
//GET
router.get("/:id", getUser)
//GET ALL
router.get("/", getUsers)

export default router