import React from "react";
import * as S from "./CartIcon.style";

// Redux
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/Cart/cartSelectors";

function CartIcon({ itemCount }) {
  return (
    <S.CartContainer>
      <S.ShoppingIcon />
      <S.ItemCountContainer>{itemCount}</S.ItemCountContainer>
    </S.CartContainer>
  );
}

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps)(CartIcon);
