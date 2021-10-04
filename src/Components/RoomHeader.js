import { observer } from "mobx-react-lite";
import React from "react";
import { motion } from "framer-motion"

function RoomHeader({ name }) {
  return (
    <motion.div
    initial={{y: -60, opacity:0}}
           animate={{y: 0,opacity:1}}
           transition={{ delay:0.4}} 
    className="flex items-center h-28 text-xl p-2 px-6 border-b-2 border-gray-500">
      <img
        alt="img"
        className="h-14 w-14 rounded-full"
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      ></img>
      <p className="m-3 mx-7 text-white">{name}</p>
    </motion.div>
  );
}

export default observer(RoomHeader);
