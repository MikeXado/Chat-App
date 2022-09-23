import React from "react";
import { IconBrandBadoo, IconBrightnessDown } from "@tabler/icons";
import { Burger } from "@mantine/core";
import { changeMode } from "../../redux/slices/chatSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
export default function HeaderChat({ setOpened }) {
  const handleNavbar = () => {
    setOpened((prev) => !prev);
  };
  const dispatch = useDispatch();
  const darkModeState = useSelector((state) => state.darkMode);
  return (
    <header
      className={"header" + (darkModeState ? " elements-dark" : "")}
      style={{ borderBottom: "1px solid #cccccc" }}
    >
      <div className="header__logo-burger">
        <div className="logo">
          <IconBrandBadoo
            color={darkModeState ? "white" : "blue"}
            className="logo__img"
            size={30}
          />
          <div className="logo__text">Chat-App</div>
        </div>
        <Burger className="burger" onClick={handleNavbar} />
      </div>
      <div className="header__dark-switcher">
        <IconBrightnessDown
          color={darkModeState ? "white" : "blue"}
          size={40}
          onClick={() => {
            dispatch(changeMode());
          }}
        />
      </div>
    </header>
  );
}
