import React from "react";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import NavbarCurrentUser from "./navbar/NavbarCurrentUser";
import RegisteredUsers from "./navbar/RegisteredUsers";
import { useSelector } from "react-redux";
export default function NavbarChat({ opened, setOpened }) {
  const [user] = useAuthState(auth);
  const darkModeState = useSelector((state) => state.darkMode);
  return (
    <div
      className={
        "navbar" +
        (opened ? " navbar-open" : "") +
        (darkModeState ? " elements-dark" : "")
      }
    >
      <div className="nav-content">
        <RegisteredUsers setOpened={setOpened} />
        <NavbarCurrentUser user={user} />
      </div>
      {!user && <Navigate replace to="/" />}
    </div>
  );
}
