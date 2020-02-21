import React from "react";

import { Container, ProductsTable, Checkout } from "./styles";
import ProductTableRow from "../../components/ProductTableRow";

import products from "../../products/products";

export default function Cart() {
  function getTotalPrice() {
    let total = 0;
    products.map(p => (total += p.price * 2));

    return total
      .toFixed(2)
      .toString()
      .replace(".", ",");
  }

  return (
    <Container>
      <ProductsTable>
        {products.map(p => (
          <ProductTableRow
            image={p.image}
            name={p.name}
            price={p.price}
            key={p.image}
          />
        ))}
      </ProductsTable>
      <Checkout>
        <button>CHECKOUT</button>
        <div>
          <span>TOTAL:</span>
          <strong>${getTotalPrice()}</strong>
        </div>
      </Checkout>
    </Container>
  );
}
