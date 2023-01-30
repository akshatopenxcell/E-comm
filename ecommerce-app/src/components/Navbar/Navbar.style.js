import styled from "styled-components";

export const NavContainer = styled.div`
  min-height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 1.5rem;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: white;

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 1.8rem;
    }
  }

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 1rem;
    }
  }
`;

export const LogoContainer = styled.div`
  font-family: "Julius Sans One", sans-serif;
`;

export const OptionsContainer = styled.div`
  font-family: "Julius Sans One", sans-serif;
  width: 40vw;
  display: flex;
  justify-content: space-around;
  align-items: center;

  * {
    margin: 0rem 0.5rem;
  }

  @media screen and (max-width: 600px) {
    a {
      font-size: 0.8rem;
    }
  }
`;
