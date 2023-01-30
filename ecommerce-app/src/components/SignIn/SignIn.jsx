import React from "react";
import * as S from "./SignIn.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import FormInput from "../FormInput/FormInput";
import Button from "../CustomButton/CustomButton";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <S.SignInContainer>
        <S.SignInTitle>I have an account</S.SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label="Email"
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
            label="Password"
          />
          <S.ButtonsBarContainer>
            <Button type="submit" value="Submit Form">
              Sign In
            </Button>
            <Button
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
              style={{
                display: "block",
                alignItems: "center",
              }}
            >
              Sign in with:
              <FontAwesomeIcon icon={faGoogle} />
            </Button>
          </S.ButtonsBarContainer>
        </form>
      </S.SignInContainer>
    );
  }
}

export default SignIn;
