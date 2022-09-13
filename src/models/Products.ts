import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { NewProduct, Product } from '../interfaces/Products';

export default {
  create: async ({ name, amount }: NewProduct): Promise<Product> => {
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const [{ insertId: id }] = await connection.execute<ResultSetHeader>(query, [
      name,
      amount,
    ]);
    return { id, name, amount } as Product;
  },
};
