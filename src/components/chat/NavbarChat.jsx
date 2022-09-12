import React, { useState, useEffect } from "react";
import { Navbar, Avatar } from "@mantine/core";
import UserMenuDropDown from "./navbar/UserMenuDropDown";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
export default function NavbarChat({ opened }) {
  console.log(auth.currentUser);
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div>
      <Navbar
        p="md"
        hiddenBreakpoint="sm"
        hidden={!opened}
        width={{ sm: 200, lg: 300 }}
      >
        <div className="horizontal-line"></div>
        <div className="user">
          <Avatar className="item" src={user && user.photoURL} />
          <div className="user__info info-user item">
            <div className="info-user__name">{user && user.displayName}</div>
            <div className="info-user__email">{user && user.email}</div>
          </div>
          <UserMenuDropDown />
        </div>
      </Navbar>
      {!user && <Navigate replace to="/" />}
    </div>
  );
}
