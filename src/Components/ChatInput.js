import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

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
      <form
        className="w-11/12 m-3 flex items-center bg-chatPurpleDark  rounded-xl"
        onSubmit={(e) => setSubmit(e)}
      >
        <BsSearch className="m-3 ml-6" size={23} />
        <input
          placeholder={placeholder}
          className="w-full p-4  bg-chatPurpleDark  rounded-xl outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
      </form>
    </div>
  );
}

export default observer(ChatInput);
