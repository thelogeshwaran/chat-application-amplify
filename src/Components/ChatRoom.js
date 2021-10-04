import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import API, { graphqlOperation } from "@aws-amplify/api";
import { onCreateMessage } from "../graphql";
import { useParams } from "react-router";
import { useMessageProvider } from "../Context/MessagesProvider";
import { AiTwotoneMessage } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

function ChatRoom({ room }) {
  const { rootTree, user } = useMessageProvider();
  const { conversationId } = useParams();
  const [alert, setAlert] = useState(false);
  let roomName = room.name;

  useEffect(() => {
    subscriptioned(room.id);
    if (conversationId === room.id) {
      setAlert(false);
    }
    return () => {
      roomName.unsubscribe();
    };
  }, [rootTree, conversationId]);

  function subscriptioned(id) {
    roomName = API.graphql(
      graphqlOperation(onCreateMessage, {
        messageConversationId: id,
      })
    ).subscribe({
      next: ({ value }) => {
        if (conversationId === room.id) {
          rootTree.addNewMessage(value.data.onCreateMessage);
        } else if (
          room.id === value.data.onCreateMessage.messageConversationId
        ) {
          setAlert(true);
        }
      },
      error: (error) => console.warn(error),
    });
  }

  const members = room.name.split(" and ");
  const chatName = members.filter((item) => item !== user.username);
  return (
    <div >
      <AnimatePresence>
      <Link to={`/conversation/${room.id}/${room.name}`}
      className="flex justify-center  min-h-1/8 text-xl">
        <motion.div
        whileHover={{ scale:1.1}}
        whileTap={{ scale: 0.9}}
        initial={{x: -60, opacity:0.2}}
        animate={{x: 0,opacity:1}}
          className={
            room.id === conversationId
              ? "bg-chatBlue flex items-cnter  justify-between w-10/12 p-4 rounded-xl my-3"
              : "bg-chatPurpleDark justify-between flex items-center w-10/12 p-4 rounded-xl my-3"
          }
        >
          <div className="flex items-center">
            <img
              alt="img"
              className="h-14 w-14 rounded-full"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            ></img>
            <p className="m-3 mx-4">{chatName[0]}</p>
          </div>
          {alert && <AiTwotoneMessage color={"#EE546B"} size={25} />}
        </motion.div>
      </Link>
      </AnimatePresence>
    </div>
  );
}

export default observer(ChatRoom);
