import Users from '../models/Users.js'

export const updateUser = async (req,res,next)=>{
    try {
        const updatedUser = await Users.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(updatedUser)
    } catch (err) {
        next(err)
    }
}

export const deleteUser = async (req,res,next)=>{
    try {
        await Users.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json("User has been deleted")
    } catch (err) {
        next(err)
    }
}

export const getUser = async (req,res,next)=>{
    try {
        const user = await Users.findByPk(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        next(err)
    }
}

export const getUsers = async (req,res,next)=>{
    try {
        const users = await Users.findAll()
        res.status(200).json(users)
    } catch (err) {
        next(err)
    }
}