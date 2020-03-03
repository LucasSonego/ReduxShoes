import React from "react";
import { MdAddShoppingCart } from "react-icons/md";

import { Container, ButtonAddToCart, AmmountInCart } from "./styles";

export default function ProductCard(props) {
  return (
    <Container>
      <img src={props.image} alt="" />

      <span>{props.name}</span>
      <strong>{props.price}</strong>

      <ButtonAddToCart onClick={props.addToCart}>
        <AmmountInCart>
          <MdAddShoppingCart size="24px" color="#FFF" />
          <span>{props.amountOnCart > 0 && props.amountOnCart}</span>
        </AmmountInCart>
        <span>ADD TO CART</span>
      </ButtonAddToCart>
    </Container>
  );
}
