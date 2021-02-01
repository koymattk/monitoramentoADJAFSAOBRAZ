import {Router} from 'express';
import moneyController from '../controllers/moneyController';

const moneyRouter = Router();

moneyRouter.post('/enviar', moneyController.enviaMoney);

export default moneyRouter;