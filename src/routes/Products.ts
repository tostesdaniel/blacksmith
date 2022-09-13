import express from 'express';
import Products from '../controllers/Products';

const productsRouter = express.Router();

productsRouter.post('/', Products.create);

export default productsRouter;
