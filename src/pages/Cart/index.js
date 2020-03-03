import React from "react";
import { connect } from "react-redux";

import { Container, ProductsTable, Checkout } from "./styles";
import ProductTableRow from "../../components/ProductTableRow";

function Cart(props) {
  function getTotalPrice() {
    let total = 0;
    props.cart.map(p => (total += p.price * p.amount));

    return total
      .toFixed(2)
      .toString()
      .replace(".", ",");
  }

  return (
    <Container>
      <ProductsTable>
        {props.cart.map(product => (
          <ProductTableRow product={product} key={product.id} />
        ))}
      </ProductsTable>
      <Checkout>
        <button>CHECKOUT</button>
        <div>
          <span>TOTAL:</span>
          <strong>${getTotalPrice()}</strong>
        </div>
      </Checkout>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
