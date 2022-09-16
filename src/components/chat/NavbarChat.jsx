import React from "react";
import { Avatar } from "@mantine/core";
import UserMenuDropDown from "./navbar/UserMenuDropDown";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
export default function NavbarChat({ opened }) {
  const [user] = useAuthState(auth);
  return (
    <div className={"navbar" + (opened ? " navbar-open" : "")}>
      <div className="navbar-user">
        <div className="user">
          <Avatar
            className="navbar-user__avatar item"
            src={user && user.photoURL}
          />
          <div className="navbar-user__info info-user item">
            <div className="info-user__name">{user && user.displayName}</div>
            <div className="info-user__email">{user && user.email}</div>
          </div>
          <UserMenuDropDown />
        </div>
      </div>
      {!user && <Navigate replace to="/" />}
    </div>
  );
}
