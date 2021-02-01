import { Router } from 'express';
import userController from '../controllers/userController';
import UserController from '../controllers/userController';

const userRouter = Router();

userRouter.post('/register', UserController.cadastrar);
userRouter.post('/login',userController.autenticar);

export default userRouter;