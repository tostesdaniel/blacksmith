import Products from '../models/Products';
import { NewProduct, Product } from '../interfaces/Products';

export default {
  create: async (product: NewProduct) => Products.create(product),
  getAll: async (): Promise<Product[]> => Products.getAll(),
};
