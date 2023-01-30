import React from "react";
import * as S from "./Featured.style";
import ProductCard from "../ProductCard/ProductCard";
import PRODUCT_DATA from "../../redux/Products/productData";

function Featured() {
  return (
    <S.FeatContainer>
      <S.TextContainer>
        <h2>Featured Boxes</h2>
        <p>To see all of our boxes head over to our shop!</p>
        <button>Shop Now</button>
      </S.TextContainer>
      <S.ProductContainer>
        {PRODUCT_DATA.filter((item, i) => i < 4).map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </S.ProductContainer>
    </S.FeatContainer>
  );
}

export default Featured;
