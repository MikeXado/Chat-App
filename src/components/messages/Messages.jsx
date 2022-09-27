import React from "react";
import { auth } from "../../firebase";
export default function Messages({ message }) {
  const userId = auth.currentUser.uid;

  return (
    <div
      className={
        "board-item" +
        (userId === message.uid ? " send-message" : " recieved-message")
      }
    >
      <img
        className="avatar item"
        src={message.icon}
        alt="avatar"
        referrerPolicy="no-referrer"
      />
      <div className="board-message__text item">
        <p className="item__name">{message.dispalyName}</p>
        <p className="item__text">{message.message}</p>
      </div>
    </div>
  );
}
