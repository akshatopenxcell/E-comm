import styled from "styled-components/macro";

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
  top: 100;
  min-height: 10vh;
  width: 100%;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: row;
    font-size: 80%;
    text-align: center;
    font-size: 60%;

    * {
      padding: 5px;
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30%;
  padding: 1rem;
`;
