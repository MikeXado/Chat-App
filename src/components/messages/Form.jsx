import React, { useState } from "react";
import { db } from "../../firebase";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { auth } from "../../firebase";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
export default function Form({ chatScroll }) {
  const [messagesState, setMessagesState] = useState("");

  const user = auth.currentUser;
  const clickedUserUid = useSelector((user) => user.currentClickedUser);
  const darkModeState = useSelector((state) => state.darkMode);
  const getInput = (e) => {
    let target = e.target.value;
    setMessagesState(target);
  };

  const addMessages = async () => {
    if (messagesState !== "" && clickedUserUid !== "") {
      const timeStamp = new Date();
      setMessagesState("");

      await updateDoc(doc(db, "chats", clickedUserUid), {
        messages: arrayUnion({
          id: v4(),
          message: messagesState,
          dispalyName: user?.displayName,
          icon: user?.photoURL,
          uid: user?.uid,
          timeStamp: timeStamp,
        }),
      });
      chatScroll.current.scrollTop = chatScroll.current.scrollHeight;
    }
  };
  return (
    <div className="messages">
      <textarea
        className={"messages__input" + (darkModeState ? " elements-dark" : "")}
        placeholder="Message here..."
        style={{
          ...(darkModeState ? { backgroundColor: "#212121 !important" } : {}),
        }}
        value={messagesState}
        onChange={getInput}
        minrows={1.3}
        maxrows={10}
        maxLength={800}
      />
      <button className="form-button" onClick={addMessages}>
        Send
      </button>
    </div>
  );
}
