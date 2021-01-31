import { Request, Response } from "express";
import userModel from "../models/userModel";


class UserController {
    public async cadastrar(req: Request, res: Response) : Promise<Response> {
        const user = await userModel.create(req.body);
        const resposta = {
            message: "Usuario registrado com sucesso",
            id:user._id,
            name:user.name,
            age: user.age,
        }
        return res.json(resposta);
    }
}

export default new UserController();