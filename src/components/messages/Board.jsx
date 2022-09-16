import React, { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import Messages from "./Messages";
export default function Board({ scroll, chatScroll }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timeStamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((message) =>
        messages.push({ ...message.data(), id: message.id })
      );
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    chatScroll.current.scrollTop = chatScroll.current.scrollHeight;
  }, [messages, chatScroll]);

  return (
    <div className="board" ref={chatScroll}>
      {messages &&
        messages.map((message) => {
          return <Messages key={message.id} message={message} />;
        })}
      <span></span>
    </div>
  );
}
