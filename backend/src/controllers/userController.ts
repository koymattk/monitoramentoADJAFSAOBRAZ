import { Request, Response } from "express";
import userModel from "../models/userModel";


class UserController {
    public async cadastrar(req: Request, res: Response) : Promise<Response> {
        const user = await userModel.create(req.body);
        return res.json(user);
    }
}

export default new UserController();