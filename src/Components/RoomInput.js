import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { BiSend } from "react-icons/bi";
import { motion } from "framer-motion"

function RoomInput({ onSubmit }) {
  const [input, setInput] = useState("");
  const setSubmit = (e) => {
    e.preventDefault();
    if (input) {
      onSubmit(input);
      setInput("");
    }
  };
  return (
    <div className="flex items-center bg-chatPurple justify-center">
      <motion.form
      initial={{y: -60, opacity:0}}
      animate={{y: 0,opacity:1}}
        className="w-11/12 flex items-center bg-chatPurpleDark m-2 rounded-xl py-3"
        onSubmit={(e) => setSubmit(e)}
      >
        <input
          placeholder="Write a message..."
          className="m-2 w-11/12 h-10 p-4 rounded-xl bg-chatPurpleDark outline-none text-xl"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <div>
            <button>
            <BiSend className="bg-blue-500 rounded-full p-2" size={50} />
            </button>
        </div>
      </motion.form>
    </div>
  );
}

export default observer(RoomInput);
