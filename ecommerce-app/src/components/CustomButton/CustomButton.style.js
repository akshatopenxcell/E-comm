import styled, { css } from "styled-components";

const cartButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: white;
    color: black;
    font-weight: bolder;
    font-size: 1rem;
    border: 2px solid black;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }
  if (props.cartButtonStyles) {
    return cartButtonStyles;
  }
};

export const Button = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Hind", sans-serif;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  color: black;

  @media screen and (max-width: 600px) {
    font-size: 90%;
    min-width: 60px;
  }

  ${getButtonStyles}
`;
