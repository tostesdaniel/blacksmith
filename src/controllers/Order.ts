import { Request, Response } from 'express';
import Order from '../services/Order';

export default {
  getAll: async (_req: Request, res: Response): Promise<Response> => {
    const orders = await Order.getAll();
    return res.status(200).json(orders);
  },
};
