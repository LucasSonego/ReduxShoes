import React from "react";

import { Container } from "./styles";

import products from "../../products/products.js";
import ProductCard from "../../components/ProductCard";

export default function Home() {
  return (
    <Container>
      {products.map(p => (
        <ProductCard
          name={p.name}
          price={p.price}
          image={p.image}
          key={p.image}
        />
      ))}
    </Container>
  );
}
