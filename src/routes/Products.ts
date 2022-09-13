import express from 'express';
import Products from '../controllers/Products';

const productsRouter = express.Router();

productsRouter.post('/', Products.create);
productsRouter.get('/', Products.getAll);

export default productsRouter;
