import React from "react";
import { MdAddShoppingCart } from "react-icons/md";

import { Container, AddToCart, AmmountInCart, TextBox } from "./styles";

export default function ProductCard(props) {
  return (
    <Container>
      <img src={props.image} alt="" />

      <TextBox>
        <span>{props.name}</span>
        <strong>${props.price}</strong>
      </TextBox>

      <AddToCart>
        <AmmountInCart>
          <MdAddShoppingCart size="24px" color="#FFF" />
          <p>3</p>
        </AmmountInCart>
        <p>ADD TO CART</p>
      </AddToCart>
    </Container>
  );
}
