import React from "react";

import { Container, ProductsTable } from "./styles";
import ProductTableRow from "../../components/ProductTableRow";

import products from "../../products/products";

export default function Cart() {
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
    </Container>
  );
}
