import React from "react";
import { IconBrandBadoo } from "@tabler/icons";
import { Burger } from "@mantine/core";
export default function HeaderChat({ setOpened }) {
  const handleNavbar = () => {
    setOpened((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="logo">
        <IconBrandBadoo color="blue" className="logo__img" size={30} />
        <div className="logo__text">Chat-App</div>
      </div>
      <Burger className="burger" onClick={handleNavbar} />
    </header>
  );
}
