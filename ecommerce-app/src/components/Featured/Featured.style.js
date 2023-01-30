import styled from "styled-components/macro";

export const FeatContainer = styled.div`
  border-top: 1px solid black;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    padding: 1rem;
  }

  p {
    padding: 1rem;
  }

  button {
    margin: 1rem;
  }
`;

export const ProductContainer = styled.div`
  margin: 1rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));

  @media screen and (max-width: 600px) {
    display: block;
  }
`;
