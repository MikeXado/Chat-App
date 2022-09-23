import React, { useRef } from "react";
import Board from "../messages/Board";
import Form from "../messages/Form";
import { useSelector } from "react-redux";
import NonSelectedChat from "../messages/NonSelectedChat";
export default function ChatLogic() {
  const chatScroll = useRef(null);
  const clickedUserUid = useSelector((u) => u.currentClickedUser);
  const darkModeState = useSelector((state) => state.darkMode);
  return (
    <main className={darkModeState ? " board-dark" : ""}>
      {clickedUserUid !== "" ? (
        <>
          <Board chatScroll={chatScroll} />
          <Form chatScroll={chatScroll} />{" "}
        </>
      ) : (
        <NonSelectedChat />
      )}
    </main>
  );
}
