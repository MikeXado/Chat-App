import React, { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../../firebase";
import Messages from "./Messages";
export default function Board({ scroll }) {
  const [messages, setMessages] = useState([]);
  console.log(messages);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timeStamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((message) =>
        messages.push({ ...message.data(), id: message.id })
      );
      setMessages(messages);
      document.scrollTo = scroll;
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="board">
      {messages.map((message) => {
        return <Messages key={message.id} message={message} />;
      })}
      <span ref={scroll}></span>
    </div>
  );
}
