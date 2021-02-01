import {Router} from 'express';
import moneyController from '../controllers/moneyController';
import authMiddleware from '../middlewares/authMiddleware';

const moneyRouter = Router();

moneyRouter.post('/enviar', authMiddleware.autorizarPorToken ,moneyController.enviaMoney);

export default moneyRouter;