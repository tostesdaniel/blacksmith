import { ResultSetHeader } from 'mysql2/promise';
import User, { UserPacket } from '../interfaces/User';
import connection from './connection';

export default {
  create: async ({ username, classe, level, password }: User): Promise<number> => {
    const query = `INSERT INTO Trybesmith.Users (username, classe, level, password) 
    VALUES (?, ?, ?, ?)`;
    const values = [username, classe, level, password];
    const [{ insertId }] = await connection.execute<ResultSetHeader>(query, values);

    return insertId;
  },
  login: async ({ username, password }: User): Promise<User> => {
    const query = `SELECT id, username, classe, level, password 
      FROM Trybesmith.Users WHERE username=? AND password=?`;
    const values = [username, password];
    const [[user]] = await connection.execute<UserPacket[]>(query, values);

    return user;
  },
};
