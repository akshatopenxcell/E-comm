import React from "react";
import * as S from "./SignInUp.style";

import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

function SignInUp() {
  return (
    <S.Container>
      <SignIn />
      <SignUp />
    </S.Container>
  );
}

export default SignInUp;
