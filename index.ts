import { Product } from './product';
import { sortProductsByPrice } from './sortProduct';

const products: Product[] = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Smartphone", price: 499 },
  { id: 3, name: "Tablet", price: 299 },
  { id: 4, name: "Monitor", price: 199 },
  { id: 5, name: "Mouse", price: 25 },
];

console.log("Produtos não ordenados:");
console.log(products);

const sortedProducts = sortProductsByPrice(products);

console.log("Produtos ordenados pelo preço:");
console.log(sortedProducts);
