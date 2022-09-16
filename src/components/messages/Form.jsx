import React, { useState } from "react";
import { Button, Textarea } from "@mantine/core";
import { db } from "../../firebase";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
export default function Form({ chatScroll }) {
  const [messages, setMessages] = useState("");
  const [user] = useAuthState(auth);
  const getInput = (e) => {
    setMessages(e.target.value);
  };

  const addMessages = async (e) => {
    e.preventDefault();
    if (messages !== "") {
      await addDoc(collection(db, "messages"), {
        message: messages,
        dispalyName: user.displayName,
        icon: user.photoURL,
        uid: user.uid,
        timeStamp: serverTimestamp(),
      });
    }
    setMessages("");
    chatScroll.current.scrollTop = chatScroll.current.scrollHeight;
  };

  return (
    <div className="messages">
      <Textarea
        className="messages__input"
        placeholder="Message here..."
        autosize
        value={messages}
        onChange={getInput}
        minRows={1.3}
        maxRows={10}
        maxLength={1000}
      />
      <Button onClick={addMessages} size="lg">
        Send
      </Button>
    </div>
  );
}
