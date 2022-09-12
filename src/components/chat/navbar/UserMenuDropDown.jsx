import React, { useState } from "react";
import { Popover, Button } from "@mantine/core";
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
    <Popover opened={opened} onChange={setOpened}>
      <Popover.Target>
        <div>
          <IconArrowNarrowRight
            className="arrow-logout"
            onClick={() => setOpened((o) => !o)}
          />
        </div>
      </Popover.Target>

      <Popover.Dropdown>
        <Button color="red" onClick={signOutGoogle}>
          Log Out
        </Button>
      </Popover.Dropdown>
    </Popover>
  );
}
