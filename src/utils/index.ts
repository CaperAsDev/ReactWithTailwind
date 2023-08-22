import { Product } from '../types';

export default function calculateTotal(products: Product[]) {
  if (products.length === 0) return 0;
  const prices = products.map((product) => product.price);
  const total :number = prices.reduce((acc, product) => acc + product);
  return total;
}
