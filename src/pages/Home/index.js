import React, { useState, useEffect } from "react";

import { Container } from "./styles";

import ProductCard from "../../components/ProductCard";
import api from "../../services/api";
import { formatPrice } from "../../util/format";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getApiData() {
      const response = await api.get("products");
      const data = response.data.map(product => ({
        ...product,
        formattedPrice: formatPrice(product.price),
      }));
      setProducts(data);
    }
    getApiData();
  }, []);

  return (
    <Container>
      {products.map(p => (
        <ProductCard
          name={p.name}
          price={p.formattedPrice}
          image={p.image}
          key={p.image}
        />
      ))}
    </Container>
  );
}
