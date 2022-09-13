import jwt, { SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../interfaces/User';
import JwtToken from '../interfaces/JwtToken';

dotenv.config();

const secretKey = process.env.JWT_SECRET || 'notRagnarLothbrok';

export default async ({ id, username }: User): Promise<JwtToken> => {
  const payload = { id, username };
  const options: SignOptions = { algorithm: 'HS256' };
  const token = jwt.sign({ data: payload }, secretKey, options);
  return { token };
};
