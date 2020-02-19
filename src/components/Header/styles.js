import styled from "styled-components";
import { Link } from "react-router-dom";

const textcolor = "#eeeeee";

export const Container = styled.div`
  padding: 10px;
  border-radius: 0 0 5px 5px;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  width: min-content;

  h1 {
    font-size: 24px;
    font-weight: bold;
    margin: 5px 5px 5px 0;
    color: ${textcolor};
  }

  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }
`;

export const Cart = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  cursor: pointer;

  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }
`;

export const CartLabels = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  text-align: right;

  strong {
    font-weight: bold;
    color: ${textcolor};
  }

  span {
    font-size: 12px;
    color: #999;
  }
`;
