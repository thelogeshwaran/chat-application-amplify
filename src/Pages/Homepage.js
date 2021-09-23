import React from "react";
import ChatBar from "../Components/ChatBar";
import Chatbox from "../Components/Chatbox";
import { useMessageProvider } from "../Context/MessagesProvider";

function Homepage() {
  const { room } = useMessageProvider();
  return (
    <div className="flex flex-row h-screen">
      <ChatBar />
      {room && <Chatbox />}
    </div>
  );
}

export default Homepage;
