import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";


function ChatInput({ onSubmit, placeholder }) {
  const [input, setInput] = useState("");
  const setSubmit = (e) => {
    e.preventDefault();
    if (input) {
      onSubmit(input);
      setInput("");
    }
  };

  return (
    <div className="flex bg-chatPurple w-full justify-center">
      
      <motion.form
       initial={{x: -60, opacity:0.2}}
       animate={{x: 0,opacity:1}}
       whileHover={{ scale:1.05}}
       whileTap={{ scale:0.95}}
        className="w-10/12 m-3 flex items-center bg-chatPurpleDark  rounded-xl"
        onSubmit={(e) => setSubmit(e)}
      >
        <BsSearch className="m-3 ml-6" size={23} />
        <input
          placeholder={placeholder}
          className="w-full p-4  bg-chatPurpleDark  rounded-xl outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
      </motion.form>
    </div>
  );
}

export default observer(ChatInput);
