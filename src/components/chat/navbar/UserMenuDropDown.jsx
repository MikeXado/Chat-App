import React, { useState } from "react";
import { IconArrowNarrowRight } from "@tabler/icons";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";

const signOutGoogle = () => {
  signOut(auth)
    .then(() => {
      console.log("success");
    })
    .catch((error) => {
      console.error("error", error);
    });
};

export default function UserMenuDropDown() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="popover">
      <div className="popover__target">
        <IconArrowNarrowRight
          className="arrow-logout"
          onClick={() => setOpened((o) => !o)}
        />
      </div>
      <div className={"popover__dropdown" + (opened ? " active-dropdown" : "")}>
        <button className="btn" onClick={signOutGoogle}>
          Log Out
        </button>
      </div>
    </div>
  );
}
