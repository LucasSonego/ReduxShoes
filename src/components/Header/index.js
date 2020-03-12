import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { GiRunningShoe, GiShoppingCart } from "react-icons/gi";

import { Container, Logo, Cart, CartLabels } from "./styles";

export default function Header(props) {
  const cart = useSelector(state => state.cart);

  const cartSize = useMemo(
    () =>
      cart.reduce((acc, current) => {
        return (acc += current.amount);
      }, 0),
    [cart]
  );

  return (
    <Container>
      <Logo to="/">
        <h1>ReduxShoes</h1>
        <GiRunningShoe size="36px" color="#eee" style={{ margin: "2px 0" }} />
      </Logo>
      <Cart to="/cart">
        <CartLabels>
          <strong>My Cart</strong>
          <span>{cartSize} items</span>
        </CartLabels>
        <GiShoppingCart
          size="30px"
          color="#eee"
          style={{ margin: "4px 0 6px 0" }}
        />
      </Cart>
    </Container>
  );
}
