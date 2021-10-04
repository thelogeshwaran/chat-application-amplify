import { observer } from "mobx-react-lite";
import React from "react";
import { useMessageProvider } from "../Context/MessagesProvider";
import { motion } from "framer-motion"

function Member({ member }) {
  const { createConversation } = useMessageProvider();
  return (
    <div
      className="flex justify-center  min-h-1/8 text-xl"
      onClick={() => createConversation(member)}
    >
      <motion.div 
      whileHover={{ scale : 1.1}}
      whileTap={{ scale: 0.95 }} 
      initial={{x: -60, opacity:0.2}}
        animate={{x: 0,opacity:1}}
      className="bg-chatPurpleDark flex items-center w-10/12 p-4 rounded-xl my-3 cursor-pointer hover:bg-chatBlue">
        <img
          alt="img"
          className="h-14 w-14 rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        ></img>
        <p className="m-3 mx-4">{member.username}</p>
      </motion.div>
    </div>
  );
}

export default observer(Member);


