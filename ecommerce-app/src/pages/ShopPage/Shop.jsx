import React from "react";
import * as S from "./Shop.style";
import ShopInfo from "../../components/ShopInfo/ShopInfo";
import ProductCard from "../../components/ProductCard/ProductCard";
// import ProductDetail from "../components/ProductDetail/ProductDetail";
// Redux & State
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectProductItems } from "../../redux/Products/productSelectors";

function Shop({ product }) {
  return (
    <div>
      {/* <ProductDetail /> */}
      <ShopInfo />
      <S.ProductContainer>
        {product.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </S.ProductContainer>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  product: selectProductItems,
});

export default connect(mapStateToProps)(Shop);
