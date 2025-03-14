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