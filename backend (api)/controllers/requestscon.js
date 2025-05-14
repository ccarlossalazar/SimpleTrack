import Requests from "../models/Requests.js"


export const createRequest = async (req, res,next) => {
    const newRequest = new Requests(req.body)
    try{
        const savedRequest = await newRequest.save()
        res.status(200).json(savedRequest)
    } catch (err) {
        next(err)
    }
}

export const getAllRequests = async (req,res,next)=>{
    try {
        const requests = await Requests.findAll()
        res.status(200).json(requests)
    } catch (err) {
        next(err)
    }
}

export const deleteRequest = async (req,res,next)=>{
    try {
        await Requests.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json("Request has been deleted")
    } catch (err) {
        next(err)
    }
}


export const getRequest = async (req,res,next)=>{
    try {
        const request = await Requests.findByPk(req.params.id)

        res.status(200).json(request)
    } catch (err) {
        next(err)
    }
}


export const requestsCount = async(req, res, next) => {
    try {
    const requestCount = await Requests.count()
    res.status(200).json(requestCount)
    }catch(err) {
        next(err)
    }
}