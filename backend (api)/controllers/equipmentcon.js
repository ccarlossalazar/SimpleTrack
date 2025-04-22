import Equipment from "../models/Equipment.js";



export const createEquipment = async (req, res) => {
    const newEquipment = new Equipment({...req.body})
    try{
        const savedEquipment = await newEquipment.save()
        res.status(200).json(savedEquipment)
    } catch (err) {
        next(err)
    }
}

export const updateEquipment = async (req,res,next)=>{
    try {
        const updatedEquipment = await Equipment.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(updatedEquipment)
    } catch (err) {
        next(err)
    }
}

export const deleteEquipment = async (req,res,next)=>{
    try {
        await Equipment.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json("Equipment has been deleted")
    } catch (err) {
        next(err)
    }
}

export const getEquipment = async (req,res,next)=>{
    try {
        const equipment = await Equipment.findByPk(req.params.id)

        res.status(200).json(equipment)
    } catch (err) {
        next(err)
    }
}

export const getAllEquipment = async (req,res,next)=>{
    try {
        const equipment = await Equipment.findAll()
        res.status(200).json(equipment)
    } catch (err) {
        next(err)
    }
}

export const countByLocation = async (req,res,next)=>{
    const locations = req.query.locations.split(",")
    try {
        const list = await Promise.all(locations.map(location=>{
            return Equipment.count({where: {location}})
        }))
        res.status(200).json(list)
    } catch (err) {
        next(err)
    }
}

export const countByType = async (req,res,next)=>{
    try {
        //'Upright Bike', 'Treadmill','Elliptical','Recumbent Bike','Adaptive Motion Trainer','Stair Climber'
        const upBikeCount = await Equipment.count({where: {name: "Upright Bike"}}) 
        const tmCount = await Equipment.count({where: {name: "Treadmill"}}) 
        const ellipCount = await Equipment.count({where: {name: "Elliptical"}}) 
        const recumCount = await Equipment.count({where: {name: "Recumbent Bike"}}) 
        const adtCount = await Equipment.count({where: {name: "Adaptive Motion Trainer"}}) 
        const stairCount = await Equipment.count({where: {name: "Stair Climber"}}) 

        res.status(200).json([
            {name: "Upright Bike", count: upBikeCount},
            {name: "Treadmill", count: tmCount},
            {name: "Elliptical", count: ellipCount},
            {name: "Recumbent Bike", count: recumCount},
            {name: "Adaptive Motion Trainer", count: adtCount},
            {name: "Stair Climber", count: stairCount}
        ])
    } catch (err) {
        next(err)
    }
}