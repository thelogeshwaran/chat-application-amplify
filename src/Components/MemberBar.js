import React from "react";
import ChatInput from "./ChatInput";
import { useMessageProvider } from "../Context/MessagesProvider";
import { BiArrowBack } from "react-icons/bi";
import Member from "./Member";
import { observer } from "mobx-react-lite";

function MemberBar() {
    const {popup, setPopup,rootTree} = useMessageProvider();
    async function searchPeople(name){
        console.log(name)
    }

  return (
    <div className={(popup ==="Members" ? 'w-2/5 bg-chatPurple border-gray-500 border-r-2' : 'w-0')}>
      <div className=" flex flex-col">
      <div className="flex bg-chatPurple h-20 p-3 px-8 items-center">
      <div className="cursor-pointer" onClick={()=> setPopup("Chat")}><BiArrowBack size={25}/></div>
      <div className="mx-6 text-xl">New Chat</div>
      
      </div>
      <ChatInput onSubmit={searchPeople} placeholder="Search..."/>
      <div className="overflow-auto pb-5">
      {
          rootTree.members.map(member =>(
              <Member key={member.id} member={member}  />
          ))
      }
      </div>
    </div>
    </div>
  );
}

export default observer(MemberBar);
