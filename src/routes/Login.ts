import express from 'express';
import User from '../controllers/User';

const loginRouter = express.Router();

loginRouter.post('/', User.login);

export default loginRouter;
