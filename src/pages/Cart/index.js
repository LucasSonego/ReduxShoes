import React from "react";
import { useSelector } from "react-redux";

import { Container, ProductsTable, Checkout } from "./styles";
import ProductTableRow from "../../components/ProductTableRow";

export default function Cart() {
  const cart = useSelector(state => state.cart);

  function getTotalPrice() {
    let total = 0;
    cart.map(p => (total += p.price * p.amount));

    return total
      .toFixed(2)
      .toString()
      .replace(".", ",");
  }

  return (
    <Container>
      {cart.length < 1 && <p>Seems like your cart is empty</p>}
      <ProductsTable>
        {cart.map(product => (
          <ProductTableRow product={product} key={product.id} />
        ))}
      </ProductsTable>
      <Checkout>
        <button disabled={cart.length < 1}>CHECKOUT</button>
        <div>
          <span>TOTAL:</span>
          <strong>${getTotalPrice()}</strong>
        </div>
      </Checkout>
    </Container>
  );
}
