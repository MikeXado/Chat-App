import React from "react";
import { IconBrandBadoo, IconBrightnessDown } from "@tabler/icons";
import { changeMode, changeOpened } from "../../redux/slices/chatSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function HeaderChat() {
  const dispatch = useDispatch();
  const darkModeState = useSelector((state) => state.darkMode);
  const navOpen = useSelector((state) => state.opened);
  return (
    <header
      className={"header" + (darkModeState ? " elements-dark" : "")}
      style={{ borderBottom: "1px solid #cccccc" }}
    >
      <div className="header__logo-burger">
        <div className="logo">
          <IconBrandBadoo
            color={darkModeState ? "white" : "#0f54ae"}
            className="logo__img"
            size={30}
          />
          <div className="logo__text">Chat-App</div>
        </div>
        <div
          className={
            "burger" +
            (navOpen ? " active-burger" : "") +
            (darkModeState ? " dark-mode__burger" : "")
          }
          onClick={() => {
            dispatch(changeOpened());
          }}
        ></div>
      </div>
      <div className="header__dark-switcher">
        <IconBrightnessDown
          color={darkModeState ? "white" : "#0f54ae"}
          size={40}
          onClick={() => {
            dispatch(changeMode());
          }}
        />
      </div>
    </header>
  );
}
