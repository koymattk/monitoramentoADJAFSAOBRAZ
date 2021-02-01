import { Request, Response } from "express";
import { userInterface } from "../interfaces/userInterface";
import userModel from "../models/userModel";
import bcrypt from 'bcrypt';


class UserController {
    public async cadastrar(req: Request, res: Response) : Promise<Response> {
        const user = await userModel.create(req.body);
        const resposta = {
            message: "Usuario registrado com sucesso",
            id:user._id,
            name:user.name,
            age: user.age
        }
        return res.json(user);
    }

    public async autenticar(req: Request, res: Response) : Promise<Response> {
        const {name, password} = req.body;
        const user = await userModel.findOne({name}); 

        if(!user){
            return res.status(404).send({message:"usuario não encontrado"});
        }
        const validatePassword = await user.compararSenha(password)
        
        if(!validatePassword) {
            return res.status(400).send({message:"password incorreto"});
        }
        return res.status(200).json(user);
    }

   
}

export default new UserController();