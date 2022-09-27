import React from "react";
import HeaderChat from "../../components/chat/HeaderChat";
import NavbarChat from "../../components/chat/NavbarChat";

import ChatLogic from "../../components/chat/ChatLogic";

export default function Chat() {
  return (
    <div className="chat">
      <HeaderChat />
      <NavbarChat />
      <ChatLogic />
    </div>
  );
}
