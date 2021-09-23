import API, { graphqlOperation } from "@aws-amplify/api";
import { input } from "@aws-amplify/ui";
import React from "react";
import { useMessageProvider } from "../Context/MessagesProvider";
import { createMessage, updateRoom } from "../graphql/mutations";
import RoomHeader from "./RoomHeader";
import RoomInput from "./RoomInput";
import RoomMessages from "./RoomMessages";

function Chatbox() {
  const { room, user, messages, setMessages } = useMessageProvider();
  async function newMessage(msg) {
    const message = {
      message: msg,
      ownername: user.username,
      messageRoomId: room.id,
    };
    const { data } = await API.graphql(
      graphqlOperation(createMessage, { input: message })
    );
    setMessages([...messages, data.createMessage]);
    console.log(data);
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
