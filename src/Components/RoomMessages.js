import React from "react";
import { useMessageProvider } from "../Context/MessagesProvider";

function RoomMessages({ item }) {
  const { user } = useMessageProvider();
  var date = new Date(item.createdAt);
  const time = date.toLocaleString();
  console.log();

  return (
    <div>
      <div className="flex" key={item.id}>
        {item.authorId === user.username ? (
          <div className="bg-messageGreen w-min p-3 m-3 rounded-xl ml-auto">
            <div className="font-semibold text-messageDarkGreen">You</div>
            <div className="text-xl"> {item.content}</div>
            <div className="text-xs whitespace-nowrap mt-2">{time}</div>
          </div>
        ) : (
          <div className="bg-chatWhite w-min p-3 m-3 rounded-xl">
            <div className="font-semibold text-blue-500">{item.authorId}</div>
            <div className="text-xl "> {item.content}</div>
            <div className="text-xs whitespace-nowrap mt-2">{time}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RoomMessages;
