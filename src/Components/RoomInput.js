import React, { useState } from "react";
import { FiSend } from "react-icons/fi";

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
    <div className="flex items-center bg-chatLightGray ">
      <form className="w-full flex items-center" onSubmit={(e) => setSubmit(e)}>
        <input
          placeholder="Create a new Chat"
          className="m-3 border-2 border-gray-500 w-11/12 h-10 p-3 rounded-xl"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <div className="m-3">
          <button type="submit">
            <FiSend size={30} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default RoomInput;
