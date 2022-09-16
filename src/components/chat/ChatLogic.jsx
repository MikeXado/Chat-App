import React, { useRef } from "react";
import Board from "../messages/Board";
import Form from "../messages/Form";

export default function ChatLogic() {
  const chatScroll = useRef(null);
  return (
    <main>
      <Board chatScroll={chatScroll} />
      <Form chatScroll={chatScroll} />
    </main>
  );
}
