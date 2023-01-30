import React from "react";
import * as S from "./ProductDetail.style";

import { useSelector } from "react-redux";

function ProductDetail() {
  const detail = useSelector((state) => state.product);

  return (
    <S.CardShadow>
      <S.Detail>
        <div className="dynamic-info">
          <div className="name">detai</div>
          <div className="price"></div>
          <div className="imageUrl"></div>
          <div className="includes"></div>
        </div>
        <div className="static-info"></div>
      </S.Detail>
    </S.CardShadow>
  );
}

export default ProductDetail;
