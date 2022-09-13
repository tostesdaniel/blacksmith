import { Order as IOrder } from '../interfaces/Order';
import Order from '../models/Order';

export default {
  getAll: async (): Promise<IOrder[]> => Order.getAll(),
};
