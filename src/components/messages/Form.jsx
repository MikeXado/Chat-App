import React, { useEffect, useState } from "react";
import { Button, Textarea } from "@mantine/core";
import { db } from "../../firebase";
import {
  serverTimestamp,
  doc,
  collection,
  onSnapshot,
  orderBy,
  query,
  addDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { auth } from "../../firebase";
import Picker from "@emoji-mart/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { IconMoodSmile } from "@tabler/icons";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
export default function Form({ chatScroll }) {
  const [messagesState, setMessagesState] = useState("");
  const [messagesArray, setMessagesArray] = useState([]);
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [data, setData] = useState(null);
  const [user] = useAuthState(auth);
  const clickedUserUid = useSelector((user) => user.chat.clickedUserUid);
  const [chats, setChats] = useState([]);
  const getInput = (e) => {
    let target = e.target.value;
    setMessagesState(target);
  };

  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data").then((response) => {
      setData(response.json());
    });
  });

  useEffect(() => {
    const q = query(collection(db, "chats"), orderBy("timeStamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let chats = [];
      querySnapshot.forEach((chat) => {
        chats.push({ ...chat.data(), id: chat.id });
      });
      setChats(chats);
    });
    return () => unsubscribe();
  }, []);

  const addMessages = async () => {
    if (messagesState !== "" && clickedUserUid !== "") {
      const timeStamp = new Date();
      await updateDoc(doc(db, "chats", clickedUserUid), {
        messages: arrayUnion({
          id: v4(),
          message: messagesState,
          dispalyName: user.displayName,
          icon: user.photoURL,
          uid: user.uid,
          timeStamp: timeStamp,
        }),
      });
      setMessagesState("");
      setEmojiOpen(false);
      chatScroll.current.scrollTop = chatScroll.current.scrollHeight;
    }
  };
  const handleEmojies = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setMessagesState(messagesState + emoji);
  };

  const handleEmojiOpen = () => {
    setEmojiOpen((prev) => !prev);
  };

  return (
    <div className="messages">
      <Textarea
        className="messages__input"
        placeholder="Message here..."
        autosize
        value={messagesState}
        onChange={getInput}
        minRows={1.3}
        maxRows={10}
        maxLength={800}
      />

      <IconMoodSmile
        onClick={handleEmojiOpen}
        className="emojie-picker"
        size={30}
      />
      <div className={"emojie" + (!emojiOpen ? " hidden" : "")}>
        <Picker
          data={data}
          categories={["people"]}
          theme="light"
          onEmojiSelect={handleEmojies}
        />
      </div>
      <Button onClick={addMessages} size="lg">
        Send
      </Button>
    </div>
  );
}