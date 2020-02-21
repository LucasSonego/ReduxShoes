import styled from "styled-components";

export const THead = styled.thead`
  th {
    color: #999;
    padding: 12px 10px 0 10px;
    text-align: left;
  }
`;

export const TBody = styled.tbody`
  img {
    height: 150px;
    width: 150px;
  }

  td {
    max-width: 200px;
    padding: 10px;
    border-bottom: 1px solid #eee;

    div {
      display: flex;
      align-items: baselien;
    }

    button {
      background: none;
      border: none;
      margin: 0;
      padding: 0;

      transition: 0.2s opacity;
      &:hover {
        opacity: 0.8;
      }
    }

    svg {
      margin: 2px;
    }

    input {
      text-align: center;
      width: 50px;
      padding: 4px;
      border-radius: 5px;
      border: 1px solid #ddd;
    }
  }

  strong {
    display: block;
    color: #555;
  }

  span {
    display: block;
    font-weight: bold;
    font-size: 16px;
    color: #333;
    margin-top: 5px;
  }
`;
