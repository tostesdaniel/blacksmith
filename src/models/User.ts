import { ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/User';
import connection from './connection';

export default {
  create: async ({ username, classe, level, password }: User): Promise<number> => {
    const query = `INSERT INTO Trybesmith.Users (username, classe, level, password) 
    VALUES (?, ?, ?, ?)`;
    const values = [username, classe, level, password];
    const [{ insertId }] = await connection.execute<ResultSetHeader>(query, values);

    return insertId;
  },
};
