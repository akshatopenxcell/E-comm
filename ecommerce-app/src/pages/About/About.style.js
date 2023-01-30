import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;

  h1 {
    margin: 2rem;
  }

  img {
    height: 400px;
    width: 600px;
    max-width: 100%;
    height: auto;
  }
  p {
    width: 50%;
    align-content: center;
    padding: 1rem;
  }

  @media screen and (max-width: 900px) {
    p {
      width: 85%;
    }
  }

  @media screen and (max-width: 500px) {
    font-size: 80%;
  }
`;
