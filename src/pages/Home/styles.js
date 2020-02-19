import styled from "styled-components";

export const Container = styled.ul`
  margin: 10px 0 0 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
  }
`;
