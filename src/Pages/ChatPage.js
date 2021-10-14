import { AnimatePresence } from "framer-motion";
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
    rootTree.fetchMessages(conversationId);
  }, [conversationId, rootTree]);

  return (
    <div className="flex flex-row h-screen">
      { rootTree.popup ==="Chat" && <ChatBar />}
      { rootTree.popup ==="Members" && <MemberBar />}
      <Chatbox />
    </div>
  );
}

export default observer(ChatPage);
