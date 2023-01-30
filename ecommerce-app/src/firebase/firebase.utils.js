import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqlp4jDYX-MFuDDIV-LqpyC9hO_3dbjZQ",
  authDomain: "butcherbox-76408.firebaseapp.com",
  databaseURL: "https://butcherbox-76408.firebaseio.com",
  projectId: "butcherbox-76408",
  storageBucket: "butcherbox-76408.appspot.com",
  messagingSenderId: "18477074812",
  appId: "1:18477074812:web:5958ab28f34403af437cf9",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

export default firebase;
