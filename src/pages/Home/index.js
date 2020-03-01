import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { Container } from "./styles";

import ProductCard from "../../components/ProductCard";
import api from "../../services/api";
import { formatPrice } from "../../util/format";

function Home(props) {
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

  function hadleAddToCart(product) {
    props.dispatch({
      type: "ADD_TO_CART",
      product,
    });
  }

  return (
    <Container>
      {products.map(p => (
        <ProductCard
          name={p.name}
          price={p.formattedPrice}
          image={p.image}
          key={p.image}
          addToCart={() => hadleAddToCart(p)}
        />
      ))}
    </Container>
  );
}

export default connect()(Home);
