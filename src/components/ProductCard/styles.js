import styled from "styled-components";

export const Container = styled.li`
  display: block;
  background-color: #fff;
  padding: 15px;
  height: auto;
  width: auto;
  border-radius: 5px;

  img {
    height: 280px;
    width: 280px;
    margin-bottom: 5px;
  }

  > span {
    font-weight: bold;
    color: #393e46;
    font-size: 14px;
  }

  > strong {
    font-weight: bold;
    margin: 5px 0;
    color: #000;
    font-size: 16px;
  }
`;

export const AddToCart = styled.button`
  display: flex;
  align-items: center;
  margin-top: auto;
  background: none;
  border: none;
  border-radius: 5px;
  background: #00adb5;

  > span {
    flex: 1;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    color: #eee;
  }

  transition: 0.3s opacity;
  &:hover {
    opacity: 0.8;
  }
`;

export const AmmountInCart = styled.div`
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  float: left;
  padding: 10px;
  align-items: center;
  text-align: center;
  border-radius: 5px 0 0 5px;

  > span {
    font-size: 14px;
    color: #fff;
    margin-left: 2px;
  }
`;
