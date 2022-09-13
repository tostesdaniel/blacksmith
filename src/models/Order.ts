import { Order, OrderPacket } from '../interfaces/Order';
import connection from './connection';

export default {
  getAll: async (): Promise<Order[]> => {
    const query = `
      SELECT 
        Orders.id,
        Orders.userId,
        JSON_ARRAYAGG(Products.id) AS productsIds
      FROM
        Trybesmith.Orders
          INNER JOIN
        Trybesmith.Products ON Orders.id = Products.orderId
      GROUP BY Orders.id
      ORDER BY Orders.userId
    `;
    const [orders] = await connection.execute<OrderPacket[]>(query);

    return orders;
  },
};
