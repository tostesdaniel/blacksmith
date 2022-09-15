import { Request } from 'express';
import { RowDataPacket } from 'mysql2/promise';

export default interface User {
  id: number;
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface UserPacket extends User, RowDataPacket {}

export interface UserRequest extends Request {
  user?: {
    id: number;
    username: string;
  };
}
