import React from "react";
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from "react-icons/md";

import { THead, TBody } from "./styles";
import { connect } from "react-redux";

function ProductTableRow(props) {
  const product = props.product;

  function increaseAmount() {
    props.dispatch({
      type: "ADD_TO_CART",
      product,
    });
  }

  function decreaseAmount() {
    props.dispatch({
      type: "REMOVE_ONE_PRODUCT_FROM_CART",
      product,
    });
  }

  function remove() {
    props.dispatch({
      type: "REMOVE_PRODUCT_FROM_CART",
      product,
    });
  }

  return (
    <>
      <THead>
        <tr>
          <th />
          <th>PRODUCT</th>
          <th>AMOUNT</th>
          <th>SUBTOTAL</th>
          <th />
        </tr>
      </THead>
      <TBody>
        <tr>
          <td>
            <img src={product.image} alt="" />
          </td>
          <td>
            <strong>{product.name}</strong>
            <span>
              $
              {product.price
                .toFixed(2)
                .toString()
                .replace(".", ",")}
            </span>
          </td>
          <td>
            <div>
              <button onClick={() => decreaseAmount()}>
                <MdRemoveCircleOutline size="26px" color="#00adb5" />
              </button>
              <input type="number" readOnly value={product.amount} />
              <button onClick={() => increaseAmount()}>
                <MdAddCircleOutline size="26px" color="#00adb5" />
              </button>
            </div>
          </td>
          <td>
            <strong>
              $
              {(product.price * product.amount)
                .toFixed(2)
                .toString()
                .replace(".", ",")}
            </strong>
          </td>
          <td>
            <button onClick={() => remove()}>
              <MdDelete size="28px" color="#00adb5" />
            </button>
          </td>
        </tr>
      </TBody>
    </>
  );
}

export default connect()(ProductTableRow);
