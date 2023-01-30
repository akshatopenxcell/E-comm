import styled from "styled-components/macro";

export const ProductContainer = styled.div`
  margin: 1rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  @media screen and (max-width: 600px) {
    display: block;
  }
`;
