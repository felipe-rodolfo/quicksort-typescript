# Projeto QuickSort para Ordenação de Produtos em TypeScript

   Este projeto implementa o Quick Sort em TypeScript para ordenar uma lista de produtos com base no preço, simulando uma aplicação de e-commerce.

   ## Índice

- [Projeto QuickSort para Ordenação de Produtos em TypeScript](#projeto-quicksort-para-ordenação-de-produtos-em-typescript)
  - [Instalação](#instalação)
  - [Uso](#uso)
  - [Código de Exemplo](#código-de-exemplo)
  - [Saída Esperada](#saída-esperada)

   ## Instalação

   1. Clone o repositório:

      ```bash
      git clone https://github.com/seu-usuario/ecommerce-quicksort.git
      cd ecommerce-quicksort
      ```

   2. Instale as dependências:

      ```bash
      npm install
      ```

   ## Uso

   3. Para executar o projeto, utilize o seguinte comando:

      ```bash
      npx ts-node index.ts
      ```

   ## Exemplo de uso
   ### Descrição

   O Quick Sort pode ser útil em uma aplicação onde é necessário ordenar uma lista de produtos com base no preço. Este exemplo simula uma loja online onde produtos são ordenados do preço mais baixo para o mais alto.

   ### Código de Exemplo

   4. **Execução do QuickSort (`index.ts`):**

      ```typescript
      import { Product } from './product';
      import { sortProductsByPrice } from './sortProducts';

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
      ```

   ## Saída Esperada

   Ao executar o projeto com `npx ts-node index.ts`, a saída esperada será:

   ```
   Produtos não ordenados:
   [
     { id: 1, name: 'Laptop', price: 999 },
     { id: 2, name: 'Smartphone', price: 499 },
     { id: 3, name: 'Tablet', price: 299 },
     { id: 4, name: 'Monitor', price: 199 },
     { id: 5, name: 'Mouse', price: 25 }
   ]
   Produtos ordenados pelo preço:
   [
     { id: 5, name: 'Mouse', price: 25 },
     { id: 4, name: 'Monitor', price: 199 },
     { id: 3, name: 'Tablet', price: 299 },
     { id: 2, name: 'Smartphone', price: 499 },
     { id: 1, name: 'Laptop', price: 999 }
   ]
   ```
