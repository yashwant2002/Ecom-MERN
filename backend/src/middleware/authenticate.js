import {getUserIdFromToken} from "../db/jwtProvider.js"
import { findUserByID} from "../services/user.service.js"

const authenticate = async (req, res, next)=>{
    try {
        const token =  req.headers.authorization?.split("")[1];
        if(!token){
            return req.status(404).send({error:"Token not found ....."})
        }

        const userId = getUserIdFromToken(token)
        const user = findUserByID(userId)
        req.user =user;

    } catch (error) {
        return res.status(500).send({error: error.message})
    }
    next();
}

export {authenticate}