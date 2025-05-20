import models from "../models/models.js"

const {MaintenanceHistory: Logs, WorkOrder, Equipment} = models

export const getLogs = async (req,res,next)=>{
    try {
        const getLogs = await Logs.findAll(
            {
                include: [{
                    model: WorkOrder,
                    include: [Equipment],
                }],
            })
            const cleanedLogs = getLogs.map(log => {
                const { work_order_id, ...rest } = log.toJSON();
                return rest;
              });
        
        res.status(200).json(cleanedLogs)
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
        
        await WorkOrder.update(
            { status: "completed" },
            { where: { id: req.body.work_order_id } }
          )
        res.status(200).json(savedLog)
    } catch (err) {
        next(err)
    }
}

export const getEquipmentLogs = async (req,res,next)=>{
    try {
        const logs = await Logs.findAll({
            include: [{
                model: WorkOrder,
                where: { equipment_id: req.params.id },
                attributes: [] 
            }],
            attributes: ['id', 'date_completed', 'details', 'cost'],
            order: [['date_completed', 'DESC']]
          })

        res.status(200).json(logs)
    } catch (err) {
        next(err)
    }
}

export const getLogById = async (req,res,next)=> {
    try {
        const log = await Logs.findByPk(req.params.id, {
            include: [
                {
                    model: WorkOrder,
                    include: [Equipment]
                }
            ]
        });
        res.status(200).json(log);
    } catch(err) {
        next(err);
    }
}

export const logCount = async(req, res, next) => {
    try {
    const logCount = await Logs.count()
    res.status(200).json(logCount)
    }catch(err) {
        next(err)
    }
}

export const updateLog = async (req,res,next)=>{
    try {
        const updatedLog = await Logs.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(updatedLog)
    } catch (err) {
        next(err)
    }
}