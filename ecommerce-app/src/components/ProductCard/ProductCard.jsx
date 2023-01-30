import React from "react";
import * as S from "./ProductCard.style";

import { connect } from "react-redux";
import { addItem } from "../../redux/Cart/cartActions";

import Button from "../CustomButton/CustomButton";

function ProductCard({ item, addItem }) {
  const { name, price, imageUrl } = item;

  return (
    <S.Card>
      <S.InfoConainer>
        <div className="text">
          <h3>{name}</h3>
          <h4>£{price}</h4>
        </div>

        <Button onClick={() => addItem(item)} cartButtonStyles>
          Add to Cart
        </Button>
      </S.InfoConainer>

      <img src={imageUrl} alt="product" />
    </S.Card>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ProductCard);
