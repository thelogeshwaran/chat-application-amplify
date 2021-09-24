import React from "react";
import { Link } from "react-router-dom";
import { useMessageProvider } from "../Context/MessagesProvider";

function ChatRoom({room}) {
    const { setRoom } = useMessageProvider();
    
  return (
    <div className="bg-chatWhite min-h-1/10 text-xl flex p-3 items-center border-2" >
      <Link to={`/conversation/${room.id}/${room.name}`}>
      <img
        className="h-20 w-20 rounded-full"
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      ></img>
      <p className="m-3 mx-4">{room.name}</p></Link>
    </div>
  );
}

export default ChatRoom;
