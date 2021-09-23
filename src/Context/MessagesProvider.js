import API,{ graphqlOperation} from "@aws-amplify/api";
import React, { useContext, useEffect, createContext, useState } from "react";
import { listMessages, listRooms } from "../graphql/queries";
import { Auth } from "aws-amplify";
import * as subscriptions from '../graphql/subscriptions';
import { getUser as GetUser, createUser } from "../graphqls"


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
        // const {data} = await API.graphql(graphqlOperation(roomsByDate, queryparams))
        // console.log(data.roomsByDate.items)
        // setRooms(data.roomsByDate.items)
    }
    async function fetchMessages(roomid){
        const room = {
            id : roomid
        }
        // const { data } = await API.graphql(graphqlOperation(getRoom, room))
        // console.log(data.getRoom.messages.items)
        // setMessages(data.getRoom.messages.items)
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

    async function checkIfUserExists(id) {
      try {
        const user = await API.graphql(graphqlOperation(GetUser, {id}))
        const { getUser } = user.data
        if (!getUser) {
          // this.createUser()
          console.log("no user")
        } else {
          console.log('me:', getUser)
        }
      } catch (err) {
        console.log('error fetching user: ', err)
      }
    }


    async function createUser() {
      try {
        await API.graphql(graphqlOperation(createUser, { username: this.username }))
      } catch (err) {
        console.log('Error creating user! :', err)
      }
    }


     function subscriptioned(user){

    }

  return (
    <MessageContext.Provider value={{rooms,setRooms,room, setRoom, messages, user, setMessages}} >{children}</MessageContext.Provider>
  );
}

export function useMessageProvider() {
  return useContext(MessageContext);
}
