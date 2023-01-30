import styled from "styled-components";

export const HeroImg = styled.img`
  width: 100%;
  max-width: 100%;
  height: 90vh;
  max-height: 90%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    height: auto;
  }
`;

export const Content = styled.div`
  min-height: 90vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    font-size: 50%;
    top: 40%;
  }
  @media screen and (max-width: 400px) {
    top: 35%;
  }

  @media screen and (min-height: 810px) {
    font-size: 50%;
    top: 30%;
  }
`;

export const HeroText = styled.div`
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.75);
  padding: 2rem;
  border: 3px solid white;

  h1 {
    font-family: "Julius Sans One", sans-serif;
    padding-bottom: 1rem;
  }

  @media screen and (max-width: 600px) {
    padding: 1rem;
  }
`;

export const HeroBtn = styled.button`
  margin-top: 2rem;
  width: 60%;
  color: white;
  background-color: rgba(0, 0, 0, 0.75);
  border: 3px solid white;

  &:hover {
    background-color: rgba(65, 65, 65, 0.75);
  }

  @media screen and (max-width: 600px) {
    font-size: 50%;
  }
`;

export const BannerImg = styled.img`
  width: 100%;
`;
