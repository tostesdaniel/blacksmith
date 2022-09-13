import express from 'express';
import User from '../controllers/User';

const userRouter = express.Router();

userRouter.post('/', User.create);

export default userRouter;
