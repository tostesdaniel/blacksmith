import { Request, Response } from 'express';
import Products from '../services/Products';

export default {
  create: async (req: Request, res: Response): Promise<Response> => {
    const newProduct = req.body;
    const product = await Products.create(newProduct);

    return res.status(201).json(product);
  },
};
