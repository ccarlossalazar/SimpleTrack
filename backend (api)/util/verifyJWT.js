import jwt from 'jsonwebtoken'
import {newError} from '../util/error.js'

export const verifyToken = (req,res,next) => {
    const token = req.cookies.access_token
    if(!token) {
        return next(newError(401, "You are not authenticated"))
    }

    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) {return next(newError(403, "Token is not valid"))}        
        req.user = user
        next()
    })
}

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => {
        const userIdFromURL = Number(req.params.id)
        if (req.user.isAdmin || req.user.id === userIdFromURL) {
            next()
        } else {
            return next(newError(403, "You are not authorized"))
        }
    })
}