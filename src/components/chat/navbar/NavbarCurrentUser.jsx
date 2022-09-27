import React from "react";
import UserMenuDropDown from "./UserMenuDropDown";
import { auth } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
export default function NavbarCurrentUser() {
  const [user] = useAuthState(auth);
  return (
    <div className="navbar-user">
      <div className="user">
        <img
          className="navbar-user__avatar avatar item"
          src={user && user.photoURL}
          alt="avatar"
          referrerPolicy="no-referrer"
        />
        <div className="navbar-user__info info-user item">
          <div className="info-user__name">{user && user.displayName}</div>
          <div className="info-user__email">{user && user.email}</div>
        </div>
        <UserMenuDropDown />
      </div>
    </div>
  );
}
