import React from "react";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import NavbarCurrentUser from "./navbar/NavbarCurrentUser";
import RegisteredUsers from "./navbar/RegisteredUsers";
export default function NavbarChat({ opened, setOpened }) {
  const [user] = useAuthState(auth);
  return (
    <div className={"navbar" + (opened ? " navbar-open" : "")}>
      <div className="nav-content">
        <RegisteredUsers setOpened={setOpened} />
        <NavbarCurrentUser user={user} />
      </div>
      {!user && <Navigate replace to="/" />}
    </div>
  );
}
