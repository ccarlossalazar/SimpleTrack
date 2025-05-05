import WorkOrder from "../models/WorkOrders.js"


export const createWorkOrder = async (req, res,next) => {
    const newWorkOrder = new WorkOrder(req.body)
    try{
        const savedWorkOrder = await newWorkOrder.save()
        res.status(200).json(savedWorkOrder)
    } catch (err) {
        next(err)
    }
}

export const getAllWorkOrders = async (req,res,next)=>{
    try {
        const work_orders = await WorkOrder.findAll()
        res.status(200).json(work_orders)
    } catch (err) {
        next(err)
    }
}

export const deleteWorkOrder = async (req,res,next)=>{
    try {
        await WorkOrder.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json("Work Order has been deleted")
    } catch (err) {
        next(err)
    }
}

export const getEquipmentWorkOrders = async (req,res,next)=>{
    try {
        const workOrder = await WorkOrder.findAll({
            where: {equipment_id: req.params.id}
        })

        res.status(200).json(workOrder)
    } catch (err) {
        next(err)
    }
}

export const getWorkOrder = async (req,res,next)=>{
    try {
        const workOrder = await WorkOrder.findByPk(req.params.id)

        res.status(200).json(workOrder)
    } catch (err) {
        next(err)
    }
}

export const updateWorkOrder = async (req,res,next)=>{
    try {
        const updatedWorkOrder = await WorkOrder.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(updatedWorkOrder)
    } catch (err) {
        next(err)
    }
}