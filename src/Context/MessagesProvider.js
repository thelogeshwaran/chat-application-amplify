import API, { graphqlOperation } from "@aws-amplify/api";
import React, { useContext, useEffect, createContext } from "react";
import { getUser as GetUser, createUser, onCreateUser } from "../graphql";
import {
  createConvo,
  createConvoLink,
} from "../graphql";
import { useHistory } from "react-router";
import { onCreateConvoLink } from "../graphql";
import { setupRootStore } from "../MST/Setup";
import { useAuthProvider } from "./AuthProvider";

const MessageContext = createContext();

export function MessageProvider({ children }) {
  const { rootTree } = setupRootStore();
  const { user,popup,setPopup } = useAuthProvider();
  
  const history = useHistory();
  let subscription;
  let userSubscription;


  useEffect(()=>{
    rootTree.fetchConversations()
  },[rootTree])



  useEffect(() => {
    if (user) {
      subscribed(user.attributes.sub);
      checkIfUserExists(user);
    }
    return ()=>{
      if(user){
        subscription.unsubscribe();
      }
    }
  }, [user,rootTree]);


  function subscribed(id){
    subscription = API.graphql(
      graphqlOperation(onCreateConvoLink, {
        convoLinkUserId: id,
      })
    ).subscribe({
      next: ({  value }) =>rootTree.addNewConversation(value.data.onCreateConvoLink.conversation),
      error: (error) => console.log(error),
    });
    userSubscription = API.graphql(
      graphqlOperation(onCreateUser)
    ).subscribe({
      next: ({  value }) =>{
        rootTree.addNewMember(value.data.onCreateUser)
        console.log(value.data)
      },
            error: (error) => console.log(error),
    });
  }

  

  async function createConversation(member) {
    const members = [user.username, member.username].sort();
    const conversationName = members.join(' and ');
    const convo = { name: conversationName, members };
    const existed = rootTree.conversations.filter((room) => room.name === conversationName);
    if (existed.length > 0) {
      history.push(`/conversation/${existed[0].id}/${existed[0].name}`);
      setPopup("Chat");
    } else {
      const conversation = await API.graphql(
        graphqlOperation(createConvo, convo)
      );
      const {
        data: {
          createConvo: { id: convoLinkConversationId },
        },
      } = conversation;
      
      const relation1 = {
        convoLinkUserId: user.attributes.sub,
        convoLinkConversationId,
      };
      const relation2 = {
        convoLinkUserId: member.id,
        convoLinkConversationId,
      };
      await API.graphql(graphqlOperation(createConvoLink, relation1));
      await API.graphql(graphqlOperation(createConvoLink, relation2));
      history.push(
        `/conversation/${convoLinkConversationId}/${conversationName}`
      );
      setPopup("Chat");
    }
  }

  async function checkIfUserExists(user) {
    try {
      const userdata = await API.graphql(graphqlOperation(GetUser, { id: user.attributes.sub }));
      const { getUser } = userdata.data;
      if (!getUser) {
        createUsers(user);
      }else{
        rootTree.fetchMembers(user);
      }
    } catch (err) {
      
      console.log("error fetching user: ", err);
    }
  }

  async function createUsers(user) {
    const newUser = {
      id: user.attributes.sub,
      username: user.username,
    };
    try {
      await API.graphql(
        graphqlOperation(createUser, { input: newUser })
      );
      rootTree.fetchMembers(user);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <MessageContext.Provider
      value={{
        user,
        popup,
        setPopup,
        createConversation,
        rootTree
      }}
    >
      {children}
    </MessageContext.Provider>
  );
}

export function useMessageProvider() {
  return useContext(MessageContext);
}
