import { Router } from 'express';
import UserController from '../controllers/userController';

const userRouter = Router();

userRouter.post('/register', UserController.cadastrar);

export default userRouter;