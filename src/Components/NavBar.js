import React from "react";
import { IoFlash } from "react-icons/io5";
import { HiOutlineChatAlt } from "react-icons/hi";
import { GoSignOut } from "react-icons/go";
import Auth from "@aws-amplify/auth";
import { useHistory } from "react-router";
import { useMessageProvider } from "../Context/MessagesProvider";
import { motion } from "framer-motion"

function NavBar() {
  const history = useHistory();
  const { rootTree } = useMessageProvider();
  async function signOut() {
    await Auth.signOut();
    history.push("/");
  }
  return (
    <div className="bg-chatPurple flex items-center">
      <div className="bg-chatPurpleDark m-3 p-3  flex flex-col justify-between h-5/6 rounded-xl py-5">
        <div className="items-center  flex flex-col justify-between h-3/4 py-8">
          <motion.div
          initial={{y: -60, opacity:0}}
          animate={{y: 0,opacity:1}}
          transition={{ delay:0.3}}>
          <IoFlash color={"#406AE0"} size={50} />
          </motion.div>
          <div>
            <motion.div
            initial={{y: -60, opacity:0}}
            animate={{y: 0,opacity:1}}
            transition={{ delay:0.2}}>
            <HiOutlineChatAlt
              size={60}
              className="my-8 cursor-pointer hover:bg-chatBlue p-3 rounded-xl"
              color={"#524A7A"}
              onClick={() => rootTree.setPopup("Chat")}
            />
              </motion.div>
           <motion.div
           initial={{y: -60, opacity:0}}
           animate={{y: 0,opacity:1}}
           transition={{ delay:0.1}}>
           <GoSignOut
              size={60}
              className="my-8 cursor-pointer p-3 hover:bg-chatBlue rounded-xl"
              color={"#524A7A"}
              onClick={() => signOut()}
            />
           </motion.div>
          </div>
        </div>
        <motion.div 
        initial={{y: -60, opacity:0.2}}
        animate={{y: 0,opacity:1}}
        className="my-8">
          <img
            alt="img"
            className="h-14 w-14 rounded-full"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          ></img>
        </motion.div>
      </div>
    </div>
  );
}

export default NavBar;
