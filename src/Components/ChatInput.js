import React, { useState } from "react";

function ChatInput({ onSubmit }) {
  const [input, setInput] = useState("");

  const setSubmit = (e) => {
    e.preventDefault();
    if (input) {
      onSubmit(input);
      setInput("");
    }
  };
  
  return (
    <div className="flex bg-chatLightGray w-full">
      <form className="w-full" onSubmit={(e) => setSubmit(e)}>
        <input
          placeholder="Create a new Chat"
          className="m-3 border-2 border-gray-500 w-11/12 h-10 p-3 rounded-xl"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
      </form>
    </div>
  );
}

export default ChatInput;
