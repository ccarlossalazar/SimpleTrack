import express from "express"
import {updateUser,deleteUser,
getUser, getUsers} from "../controllers/userscon.js"
import {verifyToken} from "../util/verifyJWT.js"

const router = express.Router()

router.get("/checkauthentication", verifyToken, (req,res,next)=>{
res.send("Hello user you are verified")
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