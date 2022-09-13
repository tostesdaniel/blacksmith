import { Request, Response } from 'express';
import User from '../services/User';

export default {
  create: async (req: Request, res: Response): Promise<Response> => {
    const newUser = req.body;
    const token = await User.create(newUser);

    return res.status(201).json(token);
  },
};
