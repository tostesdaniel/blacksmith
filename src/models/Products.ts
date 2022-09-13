import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { NewProduct, Product, ProductPacket } from '../interfaces/Products';

export default {
  create: async ({ name, amount }: NewProduct): Promise<Product> => {
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const [{ insertId: id }] = await connection.execute<ResultSetHeader>(query, [
      name,
      amount,
    ]);
    return { id, name, amount } as Product;
  },
  getAll: async (): Promise<Product[]> => {
    const [products] = await connection.execute<ProductPacket[]>(
      'SELECT id, name, amount, orderId FROM Trybesmith.Products',
    );
    return products;
  },
};
