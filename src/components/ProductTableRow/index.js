import React from "react";
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from "react-icons/md";

import { THead, TBody } from "./styles";

export default function ProductTableRow(props) {
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
            <img src={props.image} alt="" />
          </td>
          <td>
            <strong>{props.name}</strong>
            <span>
              $
              {props.price
                .toFixed(2)
                .toString()
                .replace(".", ",")}
            </span>
          </td>
          <td>
            <div>
              <button>
                <MdRemoveCircleOutline size="26px" color="#00adb5" />
              </button>
              <input type="number" readOnly value={2} />
              <button>
                <MdAddCircleOutline size="26px" color="#00adb5" />
              </button>
            </div>
          </td>
          <td>
            <strong>
              $
              {(props.price * 2)
                .toFixed(2)
                .toString()
                .replace(".", ",")}
            </strong>
          </td>
          <td>
            <button>
              <MdDelete size="28px" color="#00adb5" />
            </button>
          </td>
        </tr>
      </TBody>
    </>
  );
}
