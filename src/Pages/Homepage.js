import { observer } from "mobx-react-lite";
import React from "react";
import ChatBar from "../Components/ChatBar";
import MemberBar from "../Components/MemberBar";

function Homepage() {
  return (
    <div className="flex flex-row h-screen">
      <ChatBar />
      <MemberBar />
    </div>
  );
}

export default observer(Homepage);
