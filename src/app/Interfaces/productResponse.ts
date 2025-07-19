import { product } from './products';

export interface ProductResponse {
  products: product[];
  total: number;
  skip: number;
  limit: number;
}