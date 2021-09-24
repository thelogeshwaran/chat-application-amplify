import API, { graphqlOperation} from "@aws-amplify/api";
import React,{useEffect} from "react";
import { useParams } from "react-router";
import ChatBar from "../Components/ChatBar";
import Chatbox from "../Components/Chatbox";
import { useMessageProvider } from "../Context/MessagesProvider";
import { getConvo, onCreateMessage } from "../graphql";
import { getConversation } from "../graphql/queries";

function ChatPage() {
  const { room,messages, setMessages } = useMessageProvider();
  const { conversationId } = useParams();
  let subscription
  useEffect(()=>{
    getMessages()
  },[conversationId])
  useEffect(()=>{
    subscriptioned()
    return()=>{
      subscription.unsubscribe();
    }
  },[messages])

  async function getMessages(){
    const {data} = await API.graphql(graphqlOperation(getConversation,{id: conversationId}))
    console.log(data.getConversation.messages.items)
    setMessages(data.getConversation.messages.items)
  }
  function subscriptioned(){
     subscription = API.graphql(
      graphqlOperation(onCreateMessage,{messageConversationId:conversationId})
  ).subscribe({
      next: ({ provider, value }) => setMessages([...messages,value.data.onCreateMessage]),
      error: error => console.warn(error)
  });
  
  }
  return (
    <div className="flex flex-row h-screen">
      <ChatBar />
      <Chatbox />
    </div>
  );
}

export default ChatPage;
