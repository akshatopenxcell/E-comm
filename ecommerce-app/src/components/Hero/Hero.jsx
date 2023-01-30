import React from "react";
import * as S from "./Hero.style";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <S.HeroImg
        src="https://media.istockphoto.com/id/1307591164/vector/modern-sports-shoes-logo.jpg?s=612x612&w=0&k=20&c=YL8qzSJbhn55AqxN62hoetN-qgQnNP4yf6dTafjhYgw="
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
