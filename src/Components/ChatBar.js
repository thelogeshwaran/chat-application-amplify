import React from "react";
import ChatInput from "./ChatInput";
import ChatRoom from "./ChatRoom";
import { useMessageProvider } from "../Context/MessagesProvider";
import { observer } from "mobx-react-lite";

function ChatBar() {
  const { rootTree } = useMessageProvider();
  async function searchChat(name) {
    console.log(name);
  }

  return (
    <div
      className={
        rootTree.popup === "Chat"
          ? "w-2/5 bg-chatPurple border-gray-500 border-r-2"
          : "w-0 "
      }
    >
      <div className="flex flex-col">
        <div className="flex bg-chatPurple h-20 justify-between p-3 px-8 items-center">
          <div className="font-bold text-2xl">Messages</div>
          <div
            className="text-chatGray cursor-pointer"
            onClick={() => rootTree.setPopup("Members")}
          >
            + Create new chat
          </div>
        </div>
        <ChatInput onSubmit={searchChat} placeholder="Search by keyword..." />
        <div className="overflow-auto pb-5 ">
          {rootTree.conversations.map((room) => (
            <ChatRoom key={room.id} room={room} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default observer(ChatBar);
