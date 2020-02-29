import React from "react";
import { MdAddShoppingCart } from "react-icons/md";

import { Container, AddToCart, AmmountInCart } from "./styles";

export default function ProductCard(props) {
  return (
    <Container>
      <img src={props.image} alt="" />

      <span>{props.name}</span>
      <strong>{props.price}</strong>

      <AddToCart>
        <AmmountInCart>
          <MdAddShoppingCart size="24px" color="#FFF" />
          <span>3</span>
        </AmmountInCart>
        <span>ADD TO CART</span>
      </AddToCart>
    </Container>
  );
}
