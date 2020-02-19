import styled from "styled-components";

export const Container = styled.li`
  display: block;
  background-color: #fff;
  padding: 15px;
  height: min-content;
  width: auto;
  border-radius: 5px;

  img {
    height: 280px;
    width: 280px;
  }

  span {
    font-weight: bold;
    color: #393e46;
  }

  strong {
    font-weight: bold;
    margin-top: 4px;
    color: #000;
    font-size: 16px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 60px;
`;

export const AddToCart = styled.button`
  background: #00adb5;
  border: none;
  border-radius: 5px;
  p {
    color: #eee;
    margin: 12px;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const AmmountInCart = styled.div`
  background: #0091b5;
  display: flex;
  float: left;
  padding: 10px;
  text-align: center;
  border-radius: 5px 0 0 5px;
  p {
    margin: 4px;
    font-size: 14px;
    font-weight: normal;
  }
`;
