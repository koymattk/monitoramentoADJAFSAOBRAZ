import {Request, Response} from 'express'
import moneyModel from '../models/moneyModel';
class MoneyController {
    public async enviaMoney(req: Request, res: Response): Promise<Response>{
        const money = await moneyModel.create({
           value: req.body.value,
           jovem: ''
        })

        return res.status(200).json(money);
    }
}

export default new MoneyController();