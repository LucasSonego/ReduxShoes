import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 20px;
  margin-top: 10px;

  p {
    color: #777;
    font-size: 15px;
    padding: 10px;
  }
`;

export const ProductsTable = styled.table`
  width: 100%;
`;

export const Checkout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 10px 0 10px;

  button {
    background: #00adb5;
    border: none;
    border-radius: 5px;
    padding: 10px 30px;
    font-weight: bold;
    color: #eee;
    font-size: 16px;

    transition: 0.2s opacity;
    &:hover {
      opacity: 0.8;
    }

    :disabled {
      opacity: 0.5;
      cursor: default;
    }
  }

  div {
    display: flex;
    align-items: baseline;
    padding: 10px;

    span {
      color: #333;
      font-weight: bold;
      font-size: 16px;
    }

    strong {
      font-weight: bold;
      color: #000;
      font-size: 18px;
      margin: 0 0 0 5px;
    }
  }
`;
