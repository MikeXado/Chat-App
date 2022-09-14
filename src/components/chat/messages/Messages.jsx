import React from "react";
import { Avatar } from "@mantine/core";
import { auth } from "../../../firebase";

export default function Messages({ message }) {
  const userId = auth.currentUser.uid;
  return (
    <div
      className={
        "board-item" +
        (userId === message.uid ? " send-message" : " recieved-message")
      }
    >
      <Avatar className="item" src={message.icon} />
      <div className="board-message__text item">{message.message}</div>
    </div>
  );
}
