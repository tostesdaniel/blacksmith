import { NextFunction, Request, Response } from 'express';
import { ValidationError } from 'joi';
import IUser from '../interfaces/User';
import User from '../services/User';

export default {
  create: async (req: Request, res: Response): Promise<Response> => {
    const newUser = req.body;
    const token = await User.create(newUser);

    return res.status(201).json(token);
  },
  login: async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    const user = req.body as IUser;
    const response = await User.login(user);
    if (response instanceof ValidationError) return next(response);
    if (response instanceof Error) return next(response);

    return res.status(200).json(response);
  },
};
