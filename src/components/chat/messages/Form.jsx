import { Button, Center, Textarea } from "@mantine/core";
import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { auth } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
export default function Form({ scroll }) {
  const [messages, setMessages] = useState("");
  const [user] = useAuthState(auth);
  const getInput = (e) => {
    setMessages(e.target.value);
  };

  const addMessages = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "messages"), {
      message: messages,
      dispalyName: user.displayName,
      icon: user.photoURL,
      uid: user.uid,
      timeStamp: serverTimestamp(),
    });
    setMessages("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="messages">
      <div className="messages-form">
        <Textarea
          className="texarea-input"
          placeholder="Message here..."
          autosize
          value={messages}
          onChange={getInput}
          minRows={1.3}
          maxRows={10}
        />
        <Button onClick={addMessages} size="lg">
          Send
        </Button>
      </div>
    </div>
  );
}
