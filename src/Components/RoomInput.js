import { observer } from "mobx-react-lite";
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
    <div className="flex items-center bg-chatPurple justify-center">
      <form
        className="w-11/12 flex items-center bg-chatPurpleDark m-2 rounded-xl py-3"
        onSubmit={(e) => setSubmit(e)}
      >
        <input
          placeholder="Write a message..."
          className="m-2 w-11/12 h-10 p-4 rounded-xl bg-chatPurpleDark outline-none text-xl"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <div className="">
          <button type="submit">
            <FiSend className="bg-blue-500 h-10 w-10 rounded-full p-2" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default observer(RoomInput);
