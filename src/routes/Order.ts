import express from 'express';
import Order from '../controllers/Order';

const orderRouter = express.Router();

orderRouter.get('/', Order.getAll);

export default orderRouter;
