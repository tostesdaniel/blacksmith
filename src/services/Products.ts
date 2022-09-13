import Products from '../models/Products';
import { NewProduct } from '../interfaces/Products';

export default {
  create: async (product: NewProduct) => Products.create(product),
};
