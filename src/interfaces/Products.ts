import { RowDataPacket } from 'mysql2/promise';

export interface NewProduct {
  name: string;
  amount: string;
}

export interface Product extends NewProduct {
  id: number;
  orderId: number | null;
}

export interface ProductPacket extends Product, RowDataPacket {}
