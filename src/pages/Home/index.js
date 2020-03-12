import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Container } from "./styles";

import ProductCard from "../../components/ProductCard";
import api from "../../services/api";
import { formatPrice } from "../../util/format";

export default function Home(props) {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
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
    dispatch({
      type: "ADD_TO_CART",
      product,
    });
  }

  function getAmountOnCart(productId) {
    let index = cart.findIndex(p => p.id === productId);

    let amountOnCart;
    if (index >= 0) {
      amountOnCart = cart[index].amount;
    } else {
      amountOnCart = 0;
    }
    return amountOnCart;
  }

  return (
    <Container>
      {products.map(p => (
        <ProductCard
          name={p.name}
          price={p.formattedPrice}
          image={p.image}
          key={p.id}
          addToCart={() => hadleAddToCart(p)}
          amountOnCart={getAmountOnCart(p.id)}
        />
      ))}
    </Container>
  );
}
