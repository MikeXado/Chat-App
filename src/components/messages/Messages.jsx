import React from "react";
import { Avatar } from "@mantine/core";
import { auth } from "../../firebase";

export default function Messages({ message }) {
  const userId = auth.currentUser.uid;
  const messageLength = message.message.length;
  return (
    <div
      className={
        "board-item" +
        (userId === message.uid ? " send-message" : " recieved-message")
      }
    >
      <Avatar src={message.icon} className="item" />
      <div className="board-message__text item">
        <p className="item__name">{message.dispalyName}</p>
        <p
          className="item__text"
          style={{ ...(messageLength < 10 ? { textAlign: "center" } : {}) }}
        >
          {message.message}
        </p>
      </div>
    </div>
  );
}
