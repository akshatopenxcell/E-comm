import React from "react";
import * as S from "./Hero.style";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <S.HeroImg
        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/shoe-store-logo-design-template-da7acb3f6546068cbc2272814166e8a4_screen.jpg?ts=1635317713"
        alt="two steaks"
      />
      <S.Content>
        <S.HeroText>
          <h1>Shoe Store</h1>
          <p>Dive in the Ultimate Shoe Collection</p>
        </S.HeroText>
        <Link
          to="/shop"
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <S.HeroBtn>Shop Now</S.HeroBtn>
        </Link>
      </S.Content>
      <S.BannerImg
        src="https://i.ibb.co/Tqbg7FW/Screenshot-2020-11-22-at-11-19-00.png"
        alt="awards"
      />
    </div>
  );
}

export default Hero;
