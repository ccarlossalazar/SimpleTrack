import express from "express"
import Users from "../models/Users.js"

const router = express.Router()

//Create
router.post("/", async (req, res) => {

const newUser = new Users(req.body)
    try {
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }
})
//Update
router.put("/:id", async (req, res) => {
        try {
            const updatedUser = await Users.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json(updatedUser)
        } catch (err) {
            res.status(500).json(err)
        }
    })
//Delete
router.delete("/:id", async (req, res) => {
    try {
        await Users.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json("User has been deleted")
    } catch (err) {
        res.status(500).json(err)
    }
})
//GET
router.get("/:id", async (req, res) => {
    try {
        const user = await Users.findByPk(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
})
//GET ALL
router.get("/", async (req, res) => {
    try {
        const users = await Users.findAll()
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json(err)
    }
})
export default router