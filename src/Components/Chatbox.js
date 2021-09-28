import API, { graphqlOperation } from "@aws-amplify/api";
import React, { useRef, useEffect } from "react";
import { useParams } from "react-router";
import { useMessageProvider } from "../Context/MessagesProvider";
import { createMessage } from "../graphql";
import RoomHeader from "./RoomHeader";
import RoomInput from "./RoomInput";
import RoomMessages from "./RoomMessages";
import { nanoid } from "nanoid";
import { observer } from "mobx-react-lite";

function Chatbox() {
  const { user,rootTree } = useMessageProvider();
  const { conversationId, conversationName } = useParams();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [rootTree.messages]);

  async function newMessage(msg) {
    const message = {
      id: nanoid(),
      messageConversationId: conversationId,
      content: msg,
      authorId: user.username,
    };
    await API.graphql(graphqlOperation(createMessage, message));
  }
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  const members = conversationName.split(" and ")
  const chatName = members.filter( item => item !== user.username)

  return (
    <div className="w-full bg-chatPurple flex flex-col">
      <RoomHeader name={chatName} />
      <div className="flex-1  pb-5 scrollbar scrollbar-thumb-chatGray scrollbar-width-2">
        {rootTree.messages.map((item) => (
          <RoomMessages key={item.id} item={item} />
        ))}
        
      </div>
      <div ref={messagesEndRef} />
      <RoomInput onSubmit={newMessage} />
    </div>
  );
}

export default observer(Chatbox);
