import { ValidationError } from 'joi';

export interface Error extends ErrorConstructor, ValidationError {
  message: string;
  statusCode: number;
}
