import { observer } from "mobx-react-lite";
import React from "react";
import ChatBar from "../Components/ChatBar";
import MemberBar from "../Components/MemberBar";
import { useMessageProvider } from "../Context/MessagesProvider";

function Homepage() {
  const { rootTree }= useMessageProvider();
  return (
    <div className="flex flex-row h-screen">
      { rootTree.popup ==="Chat" && <ChatBar />}
      { rootTree.popup ==="Members" && <MemberBar />}
    </div>
  );
}

export default observer(Homepage);
