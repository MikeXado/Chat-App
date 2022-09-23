import React, { useEffect, useState } from "react";
import GoogleButton from "react-google-button";
import { Navigate } from "react-router-dom";

import { auth, db } from "../../firebase";
import { serverTimestamp, setDoc, doc, getDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function LogIn() {
  const addUsers = async (user) => {
    const sameUserCheck = await getDoc(doc(db, "users", user.uid));
    if (!sameUserCheck.exists()) {
      await setDoc(doc(db, "users", user.uid), {
        displayName: user.displayName,
        email: user.email,
        icon: user.photoURL,
        uid: user.uid,
        timeStamp: serverTimestamp(),
      });
    }
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((response) => {
        if (response.user !== null) {
          addUsers(response.user);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
