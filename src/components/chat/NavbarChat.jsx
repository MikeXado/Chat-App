import React from "react";
import { Navbar, Avatar } from "@mantine/core";
import UserMenuDropDown from "./navbar/UserMenuDropDown";

export default function NavbarChat({ opened }) {
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
    >
      <div className="horizontal-line"></div>
      <div className="user">
        <Avatar className="item" />
        <div className="user__info info-user item">
          <div className="info-user__name">Amy Horsefighter</div>
          <div className="info-user__email">ahorsefighter@gmail.com</div>
        </div>
        <UserMenuDropDown />
      </div>
    </Navbar>
  );
}
