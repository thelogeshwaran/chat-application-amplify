import React from "react";
import { IoFlash } from "react-icons/io5";
import { HiOutlineChatAlt } from "react-icons/hi";
import { GoSignOut } from "react-icons/go";
import Auth from "@aws-amplify/auth";
import { useHistory } from "react-router";
import { useMessageProvider } from "../Context/MessagesProvider";

function NavBar() {
  const history = useHistory();
  const { setPopup } = useMessageProvider();
  async function signOut() {
    await Auth.signOut();
    history.push("/");
  }
  return (
    <div className="bg-chatPurple flex items-center">
      <div className="bg-chatPurpleDark m-3 p-3  flex flex-col justify-between h-5/6 rounded-xl py-5">
        
        <div className="items-center  flex flex-col justify-between h-3/4 py-8">
        <IoFlash color={"#406AE0"} size={50} />
          <div>
          <HiOutlineChatAlt size={40} className="my-8 cursor-pointer" color={"#524A7A"} onClick={()=> setPopup("Chat")} />
          <GoSignOut
            size={40}
            className="my-8 cursor-pointer"
            color={"#524A7A"}
            onClick={() => signOut()}
          />
          </div>
        </div>
        <div className="my-8">
          <img
            alt="img"
            className="h-14 w-14 rounded-3xl"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
