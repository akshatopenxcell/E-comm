import React from "react";
// Styles
import GlobalStyle from "./Globalstyle";
// Misc
import { Switch, Route, Redirect } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";
import { createUserProfileDocument } from "./firebase/firebase.utils";
// Redux & State
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/User/userActions";
import { selectCurrentUser } from "./redux/User/userSelectors";
// Pages
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage";
import About from "./pages/About/About";
import Shop from "./pages/ShopPage/Shop";
import SignInUp from "./pages/SignInUp/SignInUp";
import Checkout from "./pages/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import ForgotPassword from "./components/forgotpassword/forgotpassword"
import ResetPassword from "./components/resetpassword/ResetPassword";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route path="/shop" component={Shop} />
          <Route path="/forgot" component={ForgotPassword} />
          <Route path="/reset/:token" component={ResetPassword} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/shop" /> : <SignInUp />
            }
          />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
