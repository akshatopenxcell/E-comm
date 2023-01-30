import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Hk5CvCzpyLGChlzvL2sa6AJWezJR5ld2mkSYC1mSlVSS6YE7qKKbAZ9xRaOXp2L2xrZ1Z2SwVcWFCEJns4LqprH00UkSPldJG";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful!");
  };

  return (
    <StripeCheckout
      label="Buy now"
      name="Shoe Store"
      currency="GBP"
      billingAddress
      shippingAddress
      image="https://i.ibb.co/9YN1m8r/Screenshot-2020-11-26-at-17-18-28.png"
      description={`Your total is £${price}`}
      amount={priceForStripe}
      panelLabel="Buy Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
