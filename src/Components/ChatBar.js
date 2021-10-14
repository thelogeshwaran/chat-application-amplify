import React from "react";
import ChatInput from "./ChatInput";
import ChatRoom from "./ChatRoom";
import { useMessageProvider } from "../Context/MessagesProvider";
import { observer } from "mobx-react-lite";
import { motion } from "framer-motion";


function ChatBar() {
  const { rootTree } = useMessageProvider();
  async function searchChat(name) {
    console.log(name);
  }

  return (
    <div
      className=
           "w-2/5 bg-chatPurple border-gray-500 border-r-2">
      <div className="flex flex-col">
        <motion.div
        initial={{x: -60, opacity:0.2}}
        animate={{x: 0,opacity:1}}
         className="flex bg-chatPurple h-20 justify-between p-3  px-10 items-center">
          <div className="font-bold text-2xl">
            <h2 >Messages
              </h2>
            </div>
          <motion.div
            className="text-chatGray cursor-pointer"
            onClick={() => rootTree.setPopup("Members")}
            whileHover={{ scale: 1.3}}
            whileTap={{ scale: 0.9}}
          >
            + Create new chat
          </motion.div>
        </motion.div>
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
