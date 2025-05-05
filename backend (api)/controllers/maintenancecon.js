import Logs from "../models/Maintenance.js"

export const getLogs = async (req,res,next)=>{
    try {
        const getLogs = await Logs.findAll()
        res.status(200).json(getLogs)
    } catch (err) {
        next(err)
    }
}

export const deleteLog = async (req,res,next)=>{
    try {
        await Logs.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json("Log has been deleted")
    } catch (err) {
        next(err)
    }
}

export const createLog = async (req, res,next) => {
    const newLog = new Logs(req.body)
    try{
        const savedLog = await newLog.save()
        res.status(200).json(savedLog)
    } catch (err) {
        next(err)
    }
}

export const getEquipmentLogs = async (req,res,next)=>{
    try {
        const logs = await Logs.findAll({
            where: {equipment_id: req.params.id}
        })

        res.status(200).json(logs)
    } catch (err) {
        next(err)
    }
}