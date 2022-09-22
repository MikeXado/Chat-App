import React from "react";
import { Avatar } from "@mantine/core";
import UserMenuDropDown from "./UserMenuDropDown";
export default function NavbarCurrentUser({ user }) {
  return (
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
  );
}
