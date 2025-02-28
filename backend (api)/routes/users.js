import express from "express"

const router = express.Router()

//Create
router.post("/", async (req, res) => {

const newUser = new User(req.body)
    try {
        res.send("User created")
    } catch (error) {
        res.status(500).json(err)
    }
})
//Update
//Delete
//GET
//GET ALL

export default router