import React, { useState } from "react";
import { AppShell, Text, useMantineTheme } from "@mantine/core";
import HeaderChat from "../../components/chat/HeaderChat";
import NavbarChat from "../../components/chat/NavbarChat";
import "./chat.scss";

export default function Chat() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      navbar={<NavbarChat opened={opened} />}
      header={<HeaderChat opened={opened} setOpened={setOpened} />}
    >
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  );
}
