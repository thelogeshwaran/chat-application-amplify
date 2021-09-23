import React from "react";
import ChatInput from "./ChatInput";
import ChatRoom from "./ChatRoom";
import { API, graphqlOperation } from 'aws-amplify';
import { createRoom } from "../graphql/mutations"
import { useMessageProvider } from "../Context/MessagesProvider";

function ChatBar() {
    const {rooms,setRooms} = useMessageProvider();
    async function newRoom(roomName){
        const room ={
            name : roomName,
            type : "Room",
            members:["vigneshkumar"]
        }
        const {data} = await API.graphql(graphqlOperation(createRoom,{ input: room }))
        console.log(data.createRoom)
        setRooms([data.createRoom,...rooms])
    }
  return (
    <div className="bg-chatGray w-2/5 border-gray-500 border-r-2 flex flex-col">
      <div className="bg-chatGreen h-28 text-white text-4xl p-5">Chatapp</div>
      <ChatInput onSubmit={newRoom}/>
      <div className="overflow-auto pb-5">
      {
          rooms.map(room =>(
              <ChatRoom key={room.id} room={room}  />
          ))
      }
      </div>
    </div>
  );
}

export default ChatBar;
