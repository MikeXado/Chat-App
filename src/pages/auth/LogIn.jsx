import React from "react";
import GoogleButton from "react-google-button";
import { Navigate } from "react-router-dom";
import "./auth.scss";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then(() => {
      console.log("success");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default function LogIn() {
  const [user] = useAuthState(auth);
  return (
    <div className="auth-page">
      <div className="auth-page__text">Chat App</div>
      <div className="auth-page__buttons">
        <GoogleButton onClick={signInWithGoogle} />
        {user && <Navigate replace to="/chat" />}
      </div>
    </div>
  );
}
