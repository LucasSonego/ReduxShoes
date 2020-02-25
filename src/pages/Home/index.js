import React, { useState, useEffect } from "react";

import { Container } from "./styles";

import ProductCard from "../../components/ProductCard";
import api from "../../services/api";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getApiData() {
      const response = await api.get("products");
      setProducts(response.data);
    }
    getApiData();
  }, []);

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
