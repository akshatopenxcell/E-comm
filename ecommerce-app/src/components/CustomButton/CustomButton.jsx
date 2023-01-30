import React from "react";
import * as S from "./CustomButton.style";

function CustomButton({ children, ...otherProps }) {
  return <S.Button {...otherProps}>{children}</S.Button>;
}

export default CustomButton;
