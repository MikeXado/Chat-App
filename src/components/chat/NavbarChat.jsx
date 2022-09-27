import React from "react";
import { auth } from "../../firebase";
import { Navigate } from "react-router-dom";
import NavbarCurrentUser from "./navbar/NavbarCurrentUser";
import RegisteredUsers from "./navbar/RegisteredUsers";
import { useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
export default function NavbarChat() {
  const [currentUser] = useAuthState(auth);
  const darkModeState = useSelector((state) => state.darkMode);
  const opened = useSelector((state) => state.opened);
  return (
    <div
      className={
        "navbar" +
        (opened ? " navbar-open" : "") +
        (darkModeState ? " elements-dark" : "")
      }
    >
      <div className="nav-content">
        <RegisteredUsers />
        <NavbarCurrentUser />
      </div>
      {!currentUser && <Navigate replace to="/" />}
    </div>
  );
}
