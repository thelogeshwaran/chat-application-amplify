import API, { graphqlOperation } from "@aws-amplify/api";
import { input } from "@aws-amplify/ui";
import React from "react";
import { useParams } from "react-router";
import { useMessageProvider } from "../Context/MessagesProvider";
import { createMessage } from "../graphql";
import RoomHeader from "./RoomHeader";
import RoomInput from "./RoomInput";
import RoomMessages from "./RoomMessages";
import { nanoid } from 'nanoid'
import { useEffect } from "react/cjs/react.development";

function Chatbox() {
  const { room, user, messages, setMessages } = useMessageProvider();
  const { conversationId } = useParams();

  async function newMessage(msg) {
    const message = {
      id: nanoid(),
      messageConversationId: conversationId,
      content: msg,
      authorId: user.username
    };
     await API.graphql(graphqlOperation(createMessage,message))
  }
  return (
    <div className="w-full bg-chatGray flex flex-col">
      <RoomHeader />
      <div className="flex-1 overflow-auto pb-5">
        {messages.map((item) => (
          <RoomMessages key={item.id} item={item} />
        ))}
      </div>
      <RoomInput onSubmit={newMessage} />
    </div>
  );
}

export default Chatbox;
