import React, { useState, useEffect } from "react";
import { doc, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../../firebase";
import Messages from "./Messages";
import { useSelector } from "react-redux";
export default function Board({ chatScroll }) {
  const [messages, setMessages] = useState([]);
  const currentClickedUser = useSelector((u) => u.currentClickedUser);
  useEffect(() => {
    if (currentClickedUser === "") return;
    const unsubscribe = onSnapshot(
      doc(db, "chats", currentClickedUser),
      orderBy("timeStamp"),
      (doc) => {
        doc.exists() && setMessages(doc.data());
      }
    );
    return () => unsubscribe();
  }, [currentClickedUser]);

  useEffect(() => {
    chatScroll.current.scrollTop = chatScroll.current.scrollHeight;
  }, [messages, chatScroll]);

  return (
    <div className="board" ref={chatScroll}>
      {messages.messages?.length > 0 ? (
        messages?.messages.map((message) => {
          return <Messages key={message.id} message={message} />;
        })
      ) : (
        <div className="no-messages-yet">No Messages Yet</div>
      )}

      <span></span>
    </div>
  );
}
