import React from "react";
import * as S from "./Checkout.style";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import StripeCheckoutButton from "../../components/StripeButton/StripeButton";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/Cart/cartSelectors";

function Checkout({ cartItems, total }) {
  return (
    <S.CheckoutPageContainer>
      <S.CheckoutHeaderContainer>
        <S.HeaderBlockContainer>
          <span>Item</span>
        </S.HeaderBlockContainer>
        <S.HeaderBlockContainer>
          <span></span>
        </S.HeaderBlockContainer>
        <S.HeaderBlockContainer>
          <span>Quantity</span>
        </S.HeaderBlockContainer>
        <S.HeaderBlockContainer>
          <span>Price</span>
        </S.HeaderBlockContainer>
        <S.HeaderBlockContainer>
          <span>Remove</span>
        </S.HeaderBlockContainer>
      </S.CheckoutHeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <S.TotalContainer>TOTAL: £{total}</S.TotalContainer>
      <StripeCheckoutButton price={total} />
      <S.WarningContainer>
        *Please use the following test credit card to test payments
        functionality*
        <br />
        4242 4242 4242 4242 - Exp: 12/25 - CVV: 999
      </S.WarningContainer>
    </S.CheckoutPageContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
