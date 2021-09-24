import API,{ graphqlOperation} from "@aws-amplify/api";
import React, { useContext, useEffect, createContext, useState } from "react";
import { listConversations, listMessages } from "../graphql/queries";
import { Auth } from "aws-amplify";
import * as subscriptions from '../graphql/subscriptions';
import { getUser as GetUser, createUser, getUserAndConversations } from "../graphql";
import { listUsers, onCreateUser as OnCreateUser, createConvo,createConvoLink } from '../graphql'

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
      // const {data} = await API.graphql(graphqlOperation(listUsers))
      // console.log(data.listUsers.items)
      // const users = data.listUsers.items.filter( item => item.username !== user.username)
      // setRooms(users)
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
            checkIfUserExists(user.attributes.sub, user.username)
            console.log(user.attributes.sub)
          } catch (err) {
            console.log(err);
          }
    }

    

    useEffect(()=>{
        fetchUser()
        
    },[])
    useEffect(()=>{
      if(user){
        fetchRooms()
        conversations()
      }
    },[user])
    // useEffect(()=>{
    //   if(user){
    //     subscriptioned(user)
    //   }
    // },[user])

    // useEffect(()=>{
    //     if(room){
    //         createConversation()
    //     }
    // },[room])

    async function createConversation(){
      // const members = [user.username, room.username].sort();;
      // const conversationName = members.join(' and ');
      // const convo = {name: conversationName, members}
      // console.log(convo)
      // const conversation = await API.graphql(graphqlOperation(createConvo, convo))
      // const { data: { createConvo: { id: convoLinkConversationId }}} = conversation
      // const relation1 = { convoLinkUserId: user.username, convoLinkConversationId }
      // const relation2 = { convoLinkUserId: room.username, convoLinkConversationId }
      // await API.graphql(graphqlOperation(createConvoLink, relation1))
      // await API.graphql(graphqlOperation(createConvoLink, relation2))
    }

    async function conversations(){
      const {data} = await API.graphql(graphqlOperation(listConversations))
      console.log(data)
      setRooms(data.listConversations.items)
    }
    async function checkIfUserExists(id,name) {
      console.log(id)
      try {
        const user = await API.graphql(graphqlOperation(GetUser, {id}))
        const { getUser } = user.data
        if (!getUser) {
          createUsers(id,name)
          console.log("no user")
        } else {
          console.log('me:', getUser)
        }
      } catch (err) {
        console.log('error fetching user: ', err)
      }
    }


    async function createUsers(id,username) {
      console.log(username)
      const newUser = {
        id: id,
        username : username
      }
      try {
       const resp =  await API.graphql(graphqlOperation(createUser,{input:newUser}))
       console.log(resp)
      } catch (err) {
        console.log( err)
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
