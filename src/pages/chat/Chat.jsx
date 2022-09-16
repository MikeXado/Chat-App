import React, { useState } from "react";
import HeaderChat from "../../components/chat/HeaderChat";
import NavbarChat from "../../components/chat/NavbarChat";
import "./chat.scss";
import ChatLogic from "../../components/chat/ChatLogic";

export default function Chat() {
  const [opened, setOpened] = useState(false);
  return (
    <div className="chat">
      <HeaderChat setOpened={setOpened} />
      <NavbarChat opened={opened} />
      <ChatLogic />
    </div>
  );
}
