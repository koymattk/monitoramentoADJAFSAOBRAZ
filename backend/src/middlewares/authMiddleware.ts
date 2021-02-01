import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { userInterface } from "../interfaces/userInterface";
import userModel, { userModelInterface } from "../models/userModel";


class AuthMiddleware {
    public autorizarPorToken(req: Request, res:Response, next:NextFunction) {

        const token =  req.query.token || req.headers['x-access-token'] ;
        if(!token){
            return res.status(401).send({message:'Não autorizado'});
        }
        try {

            const userToken = jwt.verify(String(token), 'SECRET') as userModelInterface;
            const user = userModel.findById(userToken._id);
            if (!user) {
                return res.status(404).send({message:'Usuario não encontrado'});            
            }
            
        } catch (error) {
            console.log(`error: ${error}`);
            return res.status(400).send({message:"token invalido"});
        }

        return next();
    }
}

export default new AuthMiddleware();