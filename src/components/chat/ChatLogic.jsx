import React, { useRef } from "react";
import Board from "../messages/Board";
import Form from "../messages/Form";
import { useSelector } from "react-redux";
import NonSelectedChat from "../messages/NonSelectedChat";
export default function ChatLogic() {
  const chatScroll = useRef(null);
  const clickedUserUid = useSelector((u) => u.chat.clickedUserUid);
  return (
    <main>
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
