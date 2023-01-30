import React from "react";
import * as S from "./Navbar.style";
import { useLocation } from "react-router-dom";
// Firebase
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
// Redux & State
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/User/userSelectors";

// Components
import CartIcon from "../CartIcon/CartIcon";

function Navbar({ currentUser }) {
  const { pathname } = useLocation();

  return (
    <S.NavContainer>
      <S.LogoContainer>
        <Link to="/">
          <h1>Shoe Store</h1>
        </Link>
      </S.LogoContainer>
      <S.OptionsContainer>
        <Link to="/" style={{ color: pathname === "/" ? "grey" : "" }}>
          Home
        </Link>
        <Link
          to="/about"
          style={{ color: pathname === "/about" ? "grey" : "" }}
        >
          About
        </Link>
        <Link to="/shop" style={{ color: pathname === "/shop" ? "grey" : "" }}>
          Shop
        </Link>
        {currentUser ? (
          <Link to="/" onClick={() => auth.signOut()}>
            Sign Out
          </Link>
        ) : (
          <Link
            to="/signin"
            style={{ color: pathname === "/signin" ? "grey" : "" }}
          >
            Sign In
          </Link>
        )}
        <Link to="/checkout">
          <CartIcon />
        </Link>
      </S.OptionsContainer>
    </S.NavContainer>
  );
}
const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps)(Navbar);
