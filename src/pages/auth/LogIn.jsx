import React from "react";
import GoogleButton from "react-google-button";
import { Navigate } from "react-router-dom";
import { signInWithGoogle } from "../../firebase";

import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
export default function LogIn() {
  const [user] = useAuthState(auth);
  return (
    <div>
      <GoogleButton onClick={signInWithGoogle} />
      {user && <Navigate replace to="/chat" />}
    </div>
  );
}
