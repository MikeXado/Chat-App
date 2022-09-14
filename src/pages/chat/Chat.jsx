import React, { useState, useRef } from "react";
import { AppShell, useMantineTheme } from "@mantine/core";
import HeaderChat from "../../components/chat/HeaderChat";
import NavbarChat from "../../components/chat/NavbarChat";
import "./chat.scss";
import Board from "../../components/chat/messages/Board";
import ChatLogic from "../../components/chat/ChatLogic";
import Form from "../../components/chat/messages/Form";

export default function Chat() {
  const scroll = useRef(null);
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
      <Board scroll={scroll} />
      <Form scroll={scroll} />
    </AppShell>
  );
}
