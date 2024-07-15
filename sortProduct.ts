import { Product } from './product';
import { quickSort } from './quicksort';

function sortProductsByPrice(products: Product[]): Product[] {
  return quickSort(products, (a, b) => a.price - b.price);
}

export { sortProductsByPrice };
