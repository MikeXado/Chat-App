import React, { useState } from "react";
import { Popover, Button } from "@mantine/core";
import { IconArrowNarrowRight } from "@tabler/icons";
export default function UserMenuDropDown() {
  const [opened, setOpened] = useState(false);
  return (
    <Popover opened={opened} onChange={setOpened}>
      <Popover.Target>
        <div>
          <IconArrowNarrowRight onClick={() => setOpened((o) => !o)} />
        </div>
      </Popover.Target>

      <Popover.Dropdown>
        <Button color="red">Log Out</Button>
      </Popover.Dropdown>
    </Popover>
  );
}
