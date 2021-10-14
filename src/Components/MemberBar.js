import React from "react";
import ChatInput from "./ChatInput";
import { useMessageProvider } from "../Context/MessagesProvider";
import { BiArrowBack } from "react-icons/bi";
import Member from "./Member";
import { observer } from "mobx-react-lite";
import { motion } from "framer-motion"

function MemberBar() {
  const { rootTree } = useMessageProvider();
  async function searchPeople(name) {
    console.log(name);
  }

  return (
    <div className="w-2/5 bg-chatPurple border-gray-500 border-r-2">
      <div className=" flex flex-col">
        <motion.div
        initial={{x: -60, opacity:0.2}}
        animate={{x: 0,opacity:1}}
         className="flex bg-chatPurple h-20 p-3 px-8 items-center">
          <motion.div
          whileHover={{ scale:1.7}}
          className="cursor-pointer">
          <BiArrowBack size={25} onClick={() => rootTree.setPopup("Chat")} />
          </motion.div>
          <div className="mx-6 text-xl">New Chat</div>
        </motion.div>
        <ChatInput onSubmit={searchPeople} placeholder="Search..." />
        <div className="overflow-auto pb-5">
          {rootTree.members.map((member) => (
            <Member key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default observer(MemberBar);
