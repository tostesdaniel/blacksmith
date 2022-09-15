import { NextFunction, Request, Response } from 'express';
import { Error } from '../interfaces/Error';

export default (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err.isJoi) {
    const [code, message] = err.message.split('|');

    return res.status(Number(code)).json({ message });
  }

  if (err.statusCode) return res.status(err.statusCode).json({ message: err.message });

  return res.status(500).json({ message: 'Unhandled error!' });
};
