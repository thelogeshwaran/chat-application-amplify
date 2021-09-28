import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import ChatBar from "../Components/ChatBar";
import Chatbox from "../Components/Chatbox";
import MemberBar from "../Components/MemberBar";
import { useMessageProvider } from "../Context/MessagesProvider";


function ChatPage() {
  const { rootTree } = useMessageProvider();
  const { conversationId } = useParams();

  useEffect(() => {
    rootTree.fetchMessages(conversationId)
  }, [conversationId,rootTree]);


  return (
    <div className="flex flex-row h-screen">
      <ChatBar />
      <MemberBar/>
      <Chatbox />
    </div>
  );
}

export default observer(ChatPage);
