import API,{ graphqlOperation} from "@aws-amplify/api";
import React, { useContext, useEffect, createContext, useState } from "react";
import { getRoom, listMessages, listRooms, roomsByDate } from "../graphql/queries";
import { Auth } from "aws-amplify";
import * as subscriptions from '../graphql/subscriptions';


const MessageContext = createContext();

export function MessageProvider({ children }) {
    const [rooms, setRooms] = useState([]);
    const [ room, setRoom] = useState("");
    const [ messages, setMessages ] = useState([]);
    const [ user, setUser ] = useState("")

    async function fetchRooms(){
      const queryparams ={
        type : "Room",
        sortDirection: "DESC"
      }
        const {data} = await API.graphql(graphqlOperation(roomsByDate, queryparams))
        console.log(data.roomsByDate.items)
        setRooms(data.roomsByDate.items)
    }
    async function fetchMessages(roomid){
        const room = {
            id : roomid
        }
        const { data } = await API.graphql(graphqlOperation(getRoom, room))
        console.log(data.getRoom.messages.items)
        setMessages(data.getRoom.messages.items)
    } 

    async function fetchUser(){
        try {
            const user = await Auth.currentAuthenticatedUser();
            user && setUser(user);
            console.log(user)
          } catch (err) {
            console.log(err);
          }
    }

    useEffect(()=>{
        fetchRooms()
        fetchUser()
        
    },[])
    useEffect(()=>{
      if(user){
        subscriptioned(user)
      }
    },[user])

    useEffect(()=>{
        if(room){
            fetchMessages(room.id)
        }
    },[room])

     function subscriptioned(user){
      const subscription = API.graphql(
        graphqlOperation(subscriptions.onCreateMessage)
    ).subscribe({
        next: ({ provider, value }) => console.log({ provider, value }),
        error: error => console.warn(error)
    });
    const subscriptionRoom = API.graphql(
      graphqlOperation(subscriptions.onCreateRoom,{owner:user.username} )
  ).subscribe({
      next: ({ provider, value }) => console.log({ provider, value }),
      error: error => console.warn(error)
  });
//   const subscriptionMessage = API.graphql(
//     graphqlOperation(subscriptions.onCreateMessages,{messageRoomId: room.id} )
// ).subscribe({
//     next: ({ provider, value }) => console.log({ provider, value }),
//     error: error => console.warn(error)
// });
    }

  return (
    <MessageContext.Provider value={{rooms,setRooms,room, setRoom, messages, user, setMessages}} >{children}</MessageContext.Provider>
  );
}

export function useMessageProvider() {
  return useContext(MessageContext);
}
