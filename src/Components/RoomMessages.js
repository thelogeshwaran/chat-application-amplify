import { observer } from "mobx-react-lite";
import React from "react";
import { useMessageProvider } from "../Context/MessagesProvider";
import { motion } from "framer-motion"

function RoomMessages({ item }) {
  const { user } = useMessageProvider();
  var date = new Date(item.createdAt);
  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div>
      <div className="flex">
        {item.authorId === user.username ? (
          <motion.div
          initial={{y: -60, opacity:0}}
           animate={{y: 0,opacity:1}}
           transition={{ delay:0.2}} className="flex ml-auto items-end  mx-4 p-3">
            <div className="bg-chatBlue w-min p-3 mx-5 rounded-xl ">
              <div className="text-xl"> {item.content}</div>
              <div className="text-xs whitespace-nowrap mt-2">{time}</div>
            </div>
            <img
              alt="img"
              className="h-14 w-14 rounded-full"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            ></img>
          </motion.div>
        ) : (
          <motion.div 
          initial={{y: -60, opacity:0}}
           animate={{y: 0,opacity:1}}
           transition={{ delay:0.2}}className="flex items-end p-3 px-6">
          
            <img
              alt="img"
              className="h-14 w-14 rounded-full "
              src="https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ></img>
            <div className="bg-chatPurpleDark w-min p-3  ml-5 rounded-xl">
              <div className="text-xl "> {item.content}</div>
              <div className="text-xs whitespace-nowrap mt-2">{time}</div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default observer(RoomMessages);
