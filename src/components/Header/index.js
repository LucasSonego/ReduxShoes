import React from "react";
import { connect } from "react-redux";
import { GiRunningShoe, GiShoppingCart } from "react-icons/gi";

import { Container, Logo, Cart, CartLabels } from "./styles";

function header(props) {
  return (
    <Container>
      <Logo to="/">
        <h1>ReduxShoes</h1>
        <GiRunningShoe size="36px" color="#eee" style={{ margin: "2px 0" }} />
      </Logo>
      <Cart to="/cart">
        <CartLabels>
          <strong>My Cart</strong>
          <span>{props.cartSize} items</span>
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

const mapStateToProps = state => ({
  cartSize: state.cart.reduce((acc, currnt) => {
    return (acc += currnt.amount);
  }, 0),
});

export default connect(mapStateToProps)(header);
